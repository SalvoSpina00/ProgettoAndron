from pymysql import constants
import pymysql.cursors
import datetime
from dateutil.relativedelta import relativedelta
from pymysql.constants import CLIENT
from function import createSalt, getFileEncode

class DB:
    def __init__(self, host="0.0.0.0", user="root", psw="provaPass", db="Andron", autocommit=True):
        self._host = host
        self._user = user
        self._psw = psw
        self._db = db
        self.ac=autocommit

    def connetti(self,acommit=True):
        try:
            self._c1 = pymysql.connect(
                host=self._host,
                port=3306,
                user=self._user,
                password=self._psw,
                db=self._db,
                cursorclass=pymysql.cursors.DictCursor,
                autocommit=acommit,
                client_flag= CLIENT.MULTI_STATEMENTS
            )
            self._cur = self._c1.cursor()
        except (pymysql.err.OperationalError, pymysql.err.InternalError) as e:
            print(e)
            return False
        else:
            return True

    def getConnection(self):
        return self._c1

    def getCursor(self):
        return self._cur

    def disconnetti(self):
        self._c1.close()

class Query:
    def __init__(self, cursor):
        self._cursor = cursor


#region #!APP BASE


#region #! LOGIN e Registrazione UTENTE - IMPRESA - ENTE

    def loginControl(self, data):
        #!@param data -> [username, password]
        username=data["username"]
        self._cursor.execute("SELECT salt, tipo FROM Login WHERE username = %s",(username))
        login = (self._cursor.fetchone())

        if login is None: 
            return "0"

        salt = login["salt"]
        self._cursor.execute("select username from Login where pass=md5(%s)",(data["password"]+salt))
        check=self._cursor.fetchone()
        if check is None:
            return "0"
        check=check.get("username", None)
        if username == check:
            if login["tipo"] == "utente":
                self._cursor.execute("SELECT attivo FROM Utente WHERE id=%s",(self.getUserId(username)))
                attivo = self._cursor.fetchone()["attivo"]
                if attivo==0:
                    return "-1"
            if login["tipo"] == "impresa":
                self._cursor.execute("SELECT attivo FROM Impresa WHERE id=%s",(self.getUserId(username)))
                attivo = self._cursor.fetchone()["attivo"]
                if attivo==0:
                    return "-1"
            return "1"

    def addUser(self, data):
        #! @param data:[ _username, _password, _nome, _cognome, _date, _cf, _telefono, _mail, _stato, _regione, _citta, _via, _cap ]
        self._cursor.execute("SELECT username FROM Login Where username=%s",(data["_username"]))
        checkUsername = self._cursor.fetchone()
        if checkUsername != None:
            return 0 
        
        salt= createSalt(10)
    
        self._cursor.execute(
            "INSERT INTO `Login` (`username`, `pass`,`salt`, `tipo`) VALUES (%s, md5(%s), %s, 'utente')",
            (data["_username"], data["_password"]+salt ,salt)
        )

        lastid=self._cursor.lastrowid

        self._cursor.execute(
            "INSERT INTO `Utente` (`id`,`nome`, `cognome`, `data_nascita`, `cf`, `tel`, `email`, `stato`, `regione`, `citta`, `via`, `cap`) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)",
            (lastid,data["_nome"],data["_cognome"], data["_date"].split("T")[0] ,data["_cf"],data["_telefono"] ,data["_mail"],data["_stato"],data["_regione"],data["_citta"],data["_via"],data["_cap"])
        )

        return lastid
    
    def addImpresa(self, data, attivo=0):
        #! @param data:[ _username, _password, _nome, _tipo, _iva, _cf, _telefono, _mail, _stato, _regione, _citta, _via, _cap ]
        self._cursor.execute("SELECT username FROM Login Where username=%s",(data["_username"]))
        checkUsername = self._cursor.fetchone()
        if checkUsername != None:
            return 0 
        
        salt= createSalt(10)
    
        self._cursor.execute(
            "INSERT INTO `Login` (`username`, `pass`,`salt`, `tipo`) VALUES (%s, md5(%s), %s, 'impresa')",
            (data["_username"], data["_password"]+salt ,salt)
        )

        lastid=self._cursor.lastrowid

        self._cursor.execute(
            "INSERT INTO `Impresa`(`id`, `nome`, `cf`, `tipo`, `tel`, `email`, `iva`, `stato`, `regione`, `citta`, `via`, `cap`, `attivo`) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)",
            (lastid, data["_nome"], data["_cf"], data["_tipo"] ,data["_telefono"],data["_mail"] ,data["_iva"],data["_stato"],data["_regione"],data["_citta"],data["_via"],data["_cap"],attivo)
        )

        if attivo:
            self._cursor.execute("INSERT INTO Saldo (id, andron) VALUES (%s,%s)", (lastid, self.getAndronHour())) # Da togliere nella versione con blockchain


        return lastid

    def addEnte(self, data):
        #! @param data:[ _username, _password, _nome, _telefono, _email, _regione, _citta]
        self._cursor.execute("SELECT username FROM Login Where username=%s",(data["_username"]))
        checkUsername = self._cursor.fetchone()
        if checkUsername != None:
            return 0 
        
        salt= createSalt(10)
        self._cursor.execute(
            "INSERT INTO `Login` (`username`, `pass`,`salt`, `tipo`) VALUES (%s, md5(%s), %s, 'ente')",
            (data["_username"], data["_password"]+salt ,salt)
        )
    
        lastid=self._cursor.lastrowid
        self._cursor.execute("INSERT INTO Saldo (id, andron) VALUES (%s,%s)", (lastid, self.getAndronHour())) # Da togliere nella versione con blockchain

        self._cursor.execute("INSERT INTO `Ente`(`id`, `nome`, `email`, `tel`, `regione`, `citta`) VALUES (%s,%s,%s,%s,%s,%s)",
            (
                lastid,
                data["_nome"],
                data["_email"],
                data["_telefono"],
                data["_regione"],
                data["_citta"]
            )
        )
        
        return lastid
    
#endregion #! LOGIN e Registrazione (UTENTE - IMPRESA - ENTE)

#region #! INFO (UTENTE - IMPRESA - ENTE) - BUDGET - TRANSACTION 
    def getInfoUtente(self,username):
        self._cursor.execute("SELECT u.*, l.username, l.tipo as utenza FROM Login l JOIN Utente u on u.id=l.id WHERE username = %s and l.tipo='utente'", (username),)
        data = self._cursor.fetchone()
        if data is None:
            return False
        foto =getFileEncode("proPic/",self.getUserId(username))
        data["foto"] = foto if foto!=False else None
        return data
    
    def updateInfoUtente(self,username,data):
        self._cursor.execute("UPDATE `Utente` SET `tel`=%s,`email`=%s,`stato`=%s,`regione`=%s,`citta`=%s,`via`=%s,`cap`=%s WHERE id=%s",
            (
                data["_telefono"],
                data["_mail"],
                data["_stato"],
                data["_regione"],
                data["_citta"],
                data["_via"],
                data["_cap"],
                self.getUserId(username)
            )
        )
        return True

    def changePasswordUtente(self,username,data):

        self._cursor.execute("SELECT salt, tipo FROM Login WHERE username = %s",(username))
        login = self._cursor.fetchone()

        if login is None: 
            return False

        salt = login["salt"]
        self._cursor.execute("select username from Login where pass=md5(%s)",(data["_oldpsw"]+salt))
        check=self._cursor.fetchone()
        if check is None:
            return -1
        check=check.get("username", None)
        if username == check:
            salt= createSalt(10)   
            self._cursor.execute("UPDATE Login SET pass = md5(%s) , salt=%s where id=%s",(data["_newpsw"]+salt,salt,self.getUserId(username)))
            if login["tipo"]=="ente":
                self._cursor.execute("UPDATE Ente SET firstLog=1 WHERE id=%s",(self.getUserId(username)))
            return 1
        return False


    def getInfoImpresa(self,username):
        self._cursor.execute("SELECT i.*, l.username, l.tipo as utenza FROM Login l JOIN Impresa i on i.id=l.id WHERE username = %s and l.tipo='impresa'", (username),)
        data = self._cursor.fetchone()
        if data is None:
            return False
        foto =getFileEncode("proPic/",self.getUserId(username))
        data["foto"] = foto if foto!=False else None
        return data

    def getInfoEnte(self,username):
        self._cursor.execute("SELECT e.*, l.username, l.tipo as utenza FROM Login l JOIN Ente e on e.id=l.id WHERE username = %s and l.tipo='ente'", (username),)
        data = self._cursor.fetchone()
        if data is None:
            return False
        foto =getFileEncode("proPic/",self.getUserId(username))
        data["foto"] = foto if foto!=False else None
        return data

    def getUserBudget(self, username):
        self._cursor.execute("SELECT s.andron FROM Login l JOIN Saldo s on s.id=l.id WHERE l.username=%s", (username))
        data= self._cursor.fetchone()
        if data is None:
            return False
        return data

    def getUserId(self,username):
        self._cursor.execute("SELECT id FROM Login WHERE username=%s", (username))
        userId=self._cursor.fetchone().get("id", None)
        if userId is None:
            return False
        return userId

    def getUserType(self, username):
        self._cursor.execute("SELECT tipo FROM Login WHERE username = %s", (username),)
        tipo=self._cursor.fetchone().get("tipo", None)

        if tipo is None:
            return False
        return tipo

    def getTransactions(self,username,p,psize):
        offset=int(p)*int(psize)
        idUtente=self.getUserId(username)
        self._cursor.execute(
            "SELECT * FROM Transazioni WHERE ricevente=%s OR emittente=%s ORDER BY id DESC LIMIT %s OFFSET %s",
            (idUtente,idUtente,int(psize),offset),
        )
        transazioni = self._cursor.fetchall()
        for t in transazioni:
            t["data"]= str(t["data"])
        return transazioni

    def getTransaction(self,id):
        self._cursor.execute("SELECT * FROM Transazioni WHERE id=%s",(id))
        transazione = self._cursor.fetchone()
        if transazione is None:
            return False
        self._cursor.execute("SELECT nome FROM Utente WHERE id=%(id)s UNION SELECT nome FROM Ente WHERE id=%(id)s UNION SELECT nome FROM Impresa WHERE id=%(id)s",{"id" : transazione["emittente"]})
        transazione["emittente"] = self._cursor.fetchone().get("nome")
        self._cursor.execute("SELECT nome FROM Utente WHERE id=%(id)s UNION SELECT nome FROM Ente WHERE id=%(id)s UNION SELECT nome FROM Impresa WHERE id=%(id)s",{"id" : transazione["ricevente"]})
        transazione["ricevente"] = self._cursor.fetchone().get("nome")

        transazione["data"]= str(transazione["data"])

        return transazione
#endregion

#region #? SERVIZI
    def addService(self, username, data):
        #! data -> [nome, descrizione, prezzo] --> Prezzo non usato
        self._cursor.execute(
            "INSERT INTO `Servizi`(`utente`, `nome`, `descrizione`, `andron`,`ore`,`preavviso`) VALUES (%s,%s,%s,%s,%s,%s)",
            (
                self.getUserId(username),
                data["nome"],
                data["descrizione"],
                self.getAndronHour(),
                data["ore"],
                data["preavviso"]
            ),
        )
        return True

    def getMyService(self, username):
        self._cursor.execute(
            "SELECT * FROM Servizi WHERE utente = %s AND eliminato = 0", (self.getUserId(username))
        )
        return self._cursor.fetchall()

    def deleteMyService(self,username, id):
        self._cursor.execute(
            "UPDATE `Servizi` SET eliminato = 1 WHERE utente = %s and id = %s" , (self.getUserId(username), id)
        )
        return self._cursor.rowcount > 0

    def getServices(self, username, data):
        #! data -> [_page, _psize, filtro, termine]
        offset=int(data.get("_page"))*int(data.get("_psize"))

        self._cursor.execute(
            "SELECT s.*, u.nome as nomeUtente, u.cognome as cognomeUtente FROM Servizi s JOIN Utente u on u.id=s.utente WHERE u.id != %s and s.eliminato = 0 and s.accettato = 1 ORDER BY s.id DESC LIMIT %s OFFSET %s", 
            (
                self.getUserId(username),
                int(data.get("_psize")),
                offset
            )
        )
        return self._cursor.fetchall()

    def getServicesFiltered(self, username, data):
        #! data -> [_page, _psize, filtro, termine]
        termine="%"+data.get("termine")+"%"
        offset=int(data.get("_page"))*int(data.get("_psize"))

        self._cursor.execute(
            "SELECT s.*, u.nome as nomeUtente, u.cognome as cognomeUtente FROM Servizi s JOIN Utente u on u.id=s.utente WHERE u.id != %s and s.eliminato = 0 and s.accettato = 1  and (s.nome LIKE %s or s.descrizione LIKE  %s) ORDER BY s.id DESC LIMIT %s OFFSET %s", 
            (
                self.getUserId(username),
                termine,
                termine,
                int(data.get("_psize")),
                offset
            )
        )
        return self._cursor.fetchall()

    def getServiceDetails(self, id):
        self._cursor.execute(
            "SELECT s.*, u.nome as nomeUtente, u.cognome as cognomeUtente FROM Servizi s JOIN Utente u on u.id=s.utente WHERE s.id = %s", (id)
        )
        result = self._cursor.fetchone()
        return result if result!=None else False

#endregion

#region #! Richieste
    def newRequest(self, richiedente, id , data):
        #! id -> idServizio
        #! data -> [_msg, _data,_ore]
        idRichiedente = self.getUserId(richiedente)
        spesa = self.getAndronCostFromService(id) * int(data["_ore"]) 

        self._cursor.execute("SELECT s.andron, u.nome, u.cognome FROM Saldo s JOIN Utente u on s.id = u.id WHERE s.id = %s", (idRichiedente))
        infoUser = self._cursor.fetchone()
        if int(infoUser.get("andron")) < spesa:
            return False

        self._cursor.execute("UPDATE `Saldo` SET `andron`=`andron`-%s WHERE id = %s", (spesa,idRichiedente))

        servizio = self.getServiceDetails(id)
        causale = "Rimozione preventiva Andron all'utente " + infoUser["nome"] + " " + infoUser["cognome"] + " per la richiesta del servizio '" + servizio["nome"] +  "': " + servizio["descrizione"] + " all'utente " + servizio["nomeUtente"] + " " + servizio["cognomeUtente"] + " del : " + data["_data"] + ". Numero di ore richieste: " + str(data["_ore"])
        self._cursor.execute(
            "INSERT INTO `Intermediario`(`utente`, `andron`, `causale`) VALUES (%s,%s,%s)",
            (
                idRichiedente,
                spesa,
                causale
            )
        )
        orario = data["_data"].split("T")[1].split(".")[0]
        self._cursor.execute(
            "INSERT INTO `Richieste`(`richiedente`, `esponente`, `servizio`, `messaggio`, `data`,`orario` ,`ore`) VALUES (%s, %s, %s, %s, %s, %s, %s)",
            (
                idRichiedente,
                servizio["utente"],
                id,
                data["_msg"],
                data["_data"],
                orario[:5],
                data["_ore"],
            ),
        )


        return True

    def getMyRequests(self, username):
        idUtente= self.getUserId(username)
        self._cursor.execute(
            "select r.id ,r.segnalazioneRichiedente ,r.esponente ,r.stato, s.nome as nomeServizio, u.nome, u.cognome from Richieste r JOIN Servizi s on r.servizio=s.id join Utente u on r.esponente=u.id where r.richiedente=%s and r.stato!='eliminato' and r.stato!='concluso'",(idUtente))

        
        return self._cursor.fetchall()

    def updateMyRequest(self, username, id, stato):
        idUtente=self.getUserId(username)
        self._cursor.execute("SELECT * FROM Richieste r JOIN Utente u on u.id=r.richiedente WHERE r.id = %s AND r.richiedente = %s UNION SELECT * FROM Richieste r JOIN Utente u on u.id=r.richiedente WHERE r.id = %s AND r.esponente= %s", (id, idUtente, id, idUtente))
        richiesta = self._cursor.fetchone()

        if richiesta is None:
            return False

        self._cursor.execute("UPDATE Richieste SET stato=%s WHERE id= %s", (stato,id))
        return True

    def deleteMyRequest(self, username, id):
        idUtente=self.getUserId(username)
        self._cursor.execute("SELECT * FROM Richieste r JOIN Utente u on u.id=r.richiedente WHERE r.id = %s AND r.richiedente = %s UNION SELECT * FROM Richieste r JOIN Utente u on u.id=r.richiedente WHERE r.id = %s AND r.esponente= %s", (id, idUtente, id, idUtente))
        richiesta = self._cursor.fetchone()
        if richiesta is None:
            return False
        self._cursor.execute("UPDATE Richieste SET stato='eliminato' WHERE id= %s", (id))
        self._cursor.execute("SELECT ore FROM Richieste WHERE id=%s",(id))
        ore = self._cursor.fetchone()["ore"]
        andron = self.getAndronCostFromService(richiesta["servizio"]) * int(ore)

        causale = "Rimborso di "+str(andron)+" Andron all'utente " + richiesta["nome"] + " " + str(richiesta["cognome"]) +" (ID-"+ str(idUtente) +") per l'annullamento della richiesta R-"+str(id)
        self._cursor.execute(
            "INSERT INTO `Intermediario`(`utente`,`andron`, `causale`) VALUES (%s,%s,%s)",
            (
                richiesta["richiedente"],
                andron,
                causale
            )
        )
        self._cursor.execute("UPDATE Saldo set andron=andron+%s WHERE id = %s", (andron,richiesta["richiedente"]))
        return True

    def getMyServiceRequest(self, username):
        idUtente= self.getUserId(username)
        self._cursor.execute(
            "select r.id , r.sagnalazioneEsponente ,r.richiedente, r.messaggio, r.ore, r.orario, r.data, u.tel, u.email ,r.stato, s.nome as nomeServizio, u.nome, u.cognome from Richieste r JOIN Servizi s on r.servizio=s.id join Utente u on r.richiedente=u.id where r.esponente=%s and r.stato!='rifiutato' and r.stato!='eliminato' and r.stato!='concluso'",(idUtente))
        
        request=self._cursor.fetchall() 
        for r in request:
            r["data"]= str(r["data"])
        
        return request

    def confirmRequest(self, username, id ,data):
        #! data -> [_msg, _valutazione]
        idUtente = self.getUserId(username)

        self._cursor.execute("SELECT s.andron, s.utente, s.nome, r.ore FROM Servizi s JOIN Richieste r on s.id=r.servizio WHERE r.id = %s",(id))
        dati=self._cursor.fetchone()
        if dati == False:
            return False

        andron = dati["andron"] * int(dati["ore"])
        self._cursor.execute("UPDATE Saldo SET andron=andron+%s WHERE id = %s",(andron,dati["utente"]))
        
        causale="Esecuzione del Servizio: " + dati["nome"]
        
        self._cursor.execute("INSERT INTO Transazioni (andron, emittente, ricevente, causale) VALUES (%s,%s,%s,%s)",
            (
                andron,
                idUtente,
                dati["utente"],
                causale,
            )
        )
        
        self._cursor.execute("INSERT INTO `FeedbackServizi`(`richiesta`,`valutazione`, `messaggio`, `da`, `a`) VALUES (%s,%s,%s,%s,%s)",
            (
                id,
                data["_valutazione"],
                data["_msg"],
                idUtente,
                dati["utente"]
            )
        )
        
        return self.updateMyRequest(username, id, "confermato")

#endregion

#region #? Segnalazioni
    def newSegnalazioneServizio(self,username,data):
        #! data -> [_msg, utente(da segnalare), id (richiesta o ordine da segnalare)]

        segnalatore = self.getUserId(username)
        self._cursor.execute("SELECT * FROM Richieste WHERE id = %s AND richiedente = %s AND segnalazioneRichiedente = 0 UNION SELECT * FROM Richieste r WHERE r.id = %s AND r.esponente= %s AND sagnalazioneEsponente = 0", (data["id"], segnalatore, data["id"], segnalatore))
        richiesta = self._cursor.fetchone()

        if richiesta is None:
            return False

        if segnalatore == richiesta["richiedente"]:
            self._cursor.execute("UPDATE Richieste SET segnalazioneRichiedente = 1 WHERE id=%s",(data["id"]))
        else:
            self._cursor.execute("UPDATE Richieste SET sagnalazioneEsponente = 1 WHERE id=%s",(data["id"]))

        self._cursor.execute("INSERT INTO SegnalazioniServizi (richiesta,messaggio,da,a) VALUES (%s,%s,%s,%s)",
            (
                data["id"],
                data["_msg"],
                segnalatore,
                data["utente"]
            )
        )
        return True

    def newSegnalazioneOrdine(self,username,data):
        self._cursor.execute("UPDATE Ordini SET segnalato = 1 WHERE id=%s",(data["id"]))
        self._cursor.execute("INSERT INTO SegnalazioniOrdini (ordine, messaggio, da, a) VALUES (%s,%s,%s,%s)",
            (
                data["id"],
                data["_msg"],
                self.getUserId(username),
                data["utente"]
            )
        )
        return True

#endregion 

#region #! Products

    def getMyProducts(self,username):
        self._cursor.execute("SELECT * FROM Beni WHERE eliminato = 0 AND impresa = %s", (self.getUserId(username)))
        data = self._cursor.fetchall()
        for product in data:
            product["img"]= getFileEncode("products/",product["id"])
            product["img"]= product["img"] if product["img"] != False else None
        return data

    def addProducts(self,username,data):
        print(data)
        #! data -> [nome, marca, descrizione, foto, prezzo, categoria, quantita]
        self._cursor.execute("INSERT INTO `Beni`(`impresa`, `nome`, `marca`, `descrizione`, `categoria`, `andron`, `quantita`) VALUES (%s,%s,%s,%s,%s,%s,%s)",
            (
                self.getUserId(username),
                data["nome"],
                data["marca"],
                data["descrizione"],
                data["categoria"],
                data["prezzo"],
                data["quantita"]
            )
        )
        return self._cursor.lastrowid

    def deleteProducts(self, username, id):
        self._cursor.execute("UPDATE Beni SET eliminato = 1 WHERE impresa = %s AND id=%s", (self.getUserId(username),id))
        return self._cursor.rowcount > 0 

    def addProductQuantity(self, username, id, quantita):
        self._cursor.execute("UPDATE Beni SET quantita = quantita+%s WHERE impresa = %s AND id=%s", (quantita,self.getUserId(username),id))
        return self._cursor.rowcount > 0 

    def getProducts(self,username,data):
        #! data -> [_page, _psize]
        offset=int(data.get("_page"))*int(data.get("_psize"))
        self._cursor.execute("SELECT b.*, i.nome as fornitore FROM Beni b JOIN Impresa i ON i.id=b.impresa WHERE eliminato = 0 AND accettato = 1 AND impresa != %s LIMIT %s OFFSET %s", 
            (
                self.getUserId(username),
                int(data.get("_psize")),
                offset
            )
        )
        data = self._cursor.fetchall()
        for product in data:
            product["img"]= 'data:image/jpeg;base64,'+ str(getFileEncode("products/",product["id"]))

        return data

    def getProductsFiltered(self,username,data):
        #! data -> [_page, _psize, termine, min, max]
        offset=int(data.get("_page"))*int(data.get("_psize"))
        termine='%'+data.get("termine")+'%'

        if data.get("termine")=="null":
            termine=''
        minimo = 0 if data.get("min")=="null" else 0
        massimo = 10000000 if data.get("max")=="null" else 1000000
        self._cursor.execute("SELECT b.*, i.nome as fornitore FROM Beni b JOIN Impresa i ON i.id=b.impresa WHERE (eliminato = 0 AND accettato = 1 AND impresa != %s) and (b.nome LIKE %s or b.descrizione like %s or b.categoria like %s or b.marca like %s) and (b.andron>%s and b.andron<%s) LIMIT %s OFFSET %s", 
            (
                self.getUserId(username),
                termine,termine,termine,termine,minimo,massimo,
                int(data.get("_psize")),
                offset
            )
        )
        data = self._cursor.fetchall()
        for product in data:
            product["img"]= 'data:image/jpeg;base64,'+ str(getFileEncode("products/",product["id"]))

        return data

    def buyProducts(self, username, data):
        if data is None:
            return False

        idUtente = self.getUserId(username)
        for i in data:
            
            #! i -> [idProdotto, name, prezzo, quantita]
            #! Controllo Quantità
            self._cursor.execute("SELECT quantita, nome, impresa, andron FROM Beni WHERE id = %s ", (i["id"]))

            dati = self._cursor.fetchone()
            idImpresa = dati["impresa"]
            quantitaDisponibile = dati["quantita"]
            costo = dati["andron"]
            if quantitaDisponibile is None or quantitaDisponibile < i["quantity"]:
                return {"messaggio":"Quantità del prodotto " + str(dati["nome"])+ " non disponibile. Massimo "+ str(quantitaDisponibile) +" pezzi/o", "status":-1}

            tot = int(i["quantity"]) * int(costo)
            causale= "Acquisto di " + str(i["quantity"]) + " pezzo/pezzi del prodotto " + i["name"]

            #!Rimuovi Token da utente
            self._cursor.execute("UPDATE Saldo SET andron = (andron - %s) WHERE id = %s",(tot,idUtente))
            #!Aggiungi Token ad Impresa
            self._cursor.execute("UPDATE Saldo SET andron = (andron + %s) WHERE id = %s",(tot,idImpresa))
            #!Rimuovo quantita' dal prodotto
            self._cursor.execute("UPDATE Beni SET quantita = (quantita - %s) WHERE id=%s",(i["quantity"],i["id"]))

            #!Crea transazione
            self._cursor.execute("INSERT INTO Transazioni (andron, emittente, ricevente, causale) VALUES (%s,%s,%s,%s)",
            (
                tot,
                idUtente,
                idImpresa,
                causale,
            ))

            transazione=self._cursor.lastrowid
            #!Creo l'ordine
            self._cursor.execute("INSERT INTO Ordini (transazione, utente, impresa, bene, quantita, checkOrdine) VALUES (%s,%s,%s,%s,%s,%s)",
            (
                transazione,
                idUtente,
                idImpresa,
                i["id"],
                i["quantity"],
                False,
            ))

        return True
#endregion

#region #! Subs
    def addSubs(self, username, data):
        #! data -> [nome, descrizione, prezzo] 
        self._cursor.execute(
            "INSERT INTO `Abbonamenti`(`impresa`, `nome`, `descrizione`, `prezzo`) VALUES (%s,%s,%s,%s)",
            (
                self.getUserId(username),
                data["nome"],
                data["descrizione"],
                data["prezzo"]
                
            ),
        )
        return self._cursor.lastrowid

    def getMySubs(self, username):
        self._cursor.execute(
            "SELECT * FROM Abbonamenti WHERE impresa = %s AND eliminato = 0", (self.getUserId(username))
        )
        data = self._cursor.fetchall()
        
        for sub in data:
            sub["img"]= getFileEncode("subs/",sub["id"])
            sub["img"]= sub["img"] if sub["img"] != False else None

        return data
    
    
    def deleteSubs(self, username, id):
        self._cursor.execute("UPDATE Abbonamenti SET eliminato = 1 WHERE impresa = %s AND id=%s", (self.getUserId(username),id))
        return self._cursor.rowcount > 0 

    
    def getSubs(self, username, data):
        #! data -> [_page, _psize, filtro, termine]
        offset=int(data.get("_page"))*int(data.get("_psize"))

        self._cursor.execute( 
            "SELECT b.*, i.nome as fornitore FROM Abbonamenti b JOIN Impresa i ON i.id=b.impresa WHERE b.accettato = 1 AND b.eliminato = 0 ORDER BY b.id=%s  DESC LIMIT %s OFFSET %s",
            (
                self.getUserId(username),
                int(data.get("_psize")),
                offset
            )
        )
        return self._cursor.fetchall()

    def getSubsFiltered(self, username, data):
        #! data -> [_page, _psize, filtro, termine]
        termine="%"+data.get("termine")+"%"
        offset=int(data.get("_page"))*int(data.get("_psize"))

        self._cursor.execute(
            "SELECT b.*, i.nome as fornitore FROM Abbonamenti b JOIN Impresa i ON i.id=b.impresa WHERE i.id!= %s b.accettato = 1 AND b.eliminato = 0  and (b.nome LIKE %s or b.descrizione LIKE %s) ORDER BY b.id DESC LIMIT %s OFFSET %s",
            (
                self.getUserId(username),
                termine,
                termine,
                int(data.get("_psize")),
                offset
            )
        )
        return self._cursor.fetchall() 


    def buySubs(self, username, id, data,durata):
        if data is None:
            return False

        dataCorrente = datetime.date.today()
        idUtente = self.getUserId(username)
        costo = self.getAndroCostFromSubscription(id)
        spesa = costo * int(durata)
        
        if durata == '1' :
            scadenza = dataCorrente + relativedelta(months=1)
        elif durata == '3' : 
            scadenza = dataCorrente + relativedelta(months = 3)
        elif durata == '6' : 
            scadenza = dataCorrente + relativedelta(months = 6)
        elif durata == '12' :
            scadenza = dataCorrente + relativedelta(months=12)
        else:
            scadenza = datetime.date.today()


        #! id -> idAbbonamento 
        #! data -> [idAbbonamento, name, prezzo]
        self._cursor.execute("SELECT nome, impresa, prezzo FROM Abbonamenti WHERE id = %s ", (id))

        dati = self._cursor.fetchone()      
        idImpresa = dati["impresa"]
        causale = "Acquisto abbonamento -> "+ dati["nome"]
   

        try:
            
            # Verifica se esiste già un abbonamento attivo per l'utente
            self._cursor.execute("SELECT id, scadenza, durata FROM OrdiniAbbonamenti WHERE utente = %s AND abbonamento = %s AND scadenza > NOW()", (idUtente, id))
            ordine_attivo = self._cursor.fetchone()

            if ordine_attivo:
                # Calcola la nuova scadenza
                    if durata == '1' :
                        nuovaScadenza = ordine_attivo["scadenza"] + relativedelta(months=1)
                    elif durata == '3' : 
                        nuovaScadenza = ordine_attivo["scadenza"] + relativedelta(months = 3)
                    elif durata == '6' : 
                        nuovaScadenza = ordine_attivo["scadenza"] + relativedelta(months = 6)
                    elif durata == '12' :
                        nuovaScadenza = ordine_attivo["scadenza"] + relativedelta(months=12)
                    else:
                        return False

                    nuova_durata = ordine_attivo["durata"] + int(durata)

                # Aggiorna l'abbonamento esistente
                    self._cursor.execute("UPDATE OrdiniAbbonamenti SET scadenza = %s, durata = %s, stato =%s WHERE id = %s", (nuovaScadenza,nuova_durata,1,ordine_attivo["id"]))

                #!Crea transazione
                    self._cursor.execute("INSERT INTO Transazioni (andron, emittente, ricevente, causale) VALUES (%s,%s,%s,%s)",
                (
                    spesa,
                    idUtente,
                    idImpresa,
                    causale,
                 ))
                    transazione = self._cursor.lastrowid
            
            else:

                #!Crea transazione
                self._cursor.execute("INSERT INTO Transazioni (andron, emittente, ricevente, causale) VALUES (%s,%s,%s,%s)",
                (
                    spesa,
                    idUtente,
                    idImpresa,
                    causale,
                ))
                transazione = self._cursor.lastrowid


                #!Creo Ordine abbonamento      
                self._cursor.execute("INSERT INTO OrdiniAbbonamenti (transazione, utente, impresa, abbonamento, durata, scadenza) VALUES (%s, %s, %s, %s, %s, %s)",
                (                  
                        transazione,
                        idUtente,
                        idImpresa,
                        id,
                        durata,
                        scadenza
                        
                    ))


            #!Rimuovi Token da utente
            self._cursor.execute("UPDATE Saldo SET andron = (andron - %s) WHERE id = %s",(spesa,idUtente))
            #!Aggiungi Token ad Impresa
            self._cursor.execute("UPDATE Saldo SET andron = (andron + %s) WHERE id = %s",(spesa,idImpresa))
                    
            
                
                
            return True  
            

        finally:
            # Chiusura della connessione
            self._cursor.close()
   
    

    def getSubsDetails(self, id):
        self._cursor.execute(
            "SELECT b.*, i.nome as fornitore FROM Abbonamenti b JOIN Impresa i ON i.id=b.impresa WHERE s.id = %s", (id)
        )   
        result = self._cursor.fetchone()
        return result if result!=None else False
 
    
#endregion

#region #? Ordersubs
    def getMyBuySubs(self,username,data):
        offset=int(data.get("_page"))*int(data.get("_psize"))

        self._cursor.execute("SELECT o.id, o.transazione, o.durata, o.scadenza, o.stato, i.id as nodoImpresa, i.nome, i.tel as telefono , i.email, b.nome as nomeAbbonamento, b.id as idAbbonamento FROM OrdiniAbbonamenti o JOIN Impresa i on o.impresa=i.id JOIN Abbonamenti b on b.id=o.abbonamento WHERE o.utente=%s ORDER BY o.id DESC LIMIT %s OFFSET %s",
            (
                self.getUserId(username),
                int(data.get("_psize")),
                offset
            )
        )
        
        data = self._cursor.fetchall()

        
        for order in data:
            order["img"]= 'data:image/jpeg;base64,'+ str(getFileEncode("subs/",order["idAbbonamento"]))
        
        return data




#endregion

#region #? Orders 
    def getOrders(self, username):
        self._cursor.execute("SELECT l.username as usernameUtente, o.id, o.transazione, o.checkOrdine, o.quantita,b.id as idBene, b.nome as nomeBene FROM Ordini o JOIN Beni b on b.id=o.bene JOIN Login l on l.id=o.utente WHERE o.impresa = %s AND o.checkOrdine=0 ORDER BY o.id DESC", (self.getUserId(username)))
        data = self._cursor.fetchall()
        for order in data:
            usertype = self.getUserType(order["usernameUtente"])
            idUtente = self.getUserId(order["usernameUtente"])

            if usertype=="ente":
                self._cursor.execute("SELECT e.nome, e.tel as telefono, e.email FROM Ente e WHERE id=%s",(idUtente))
                acquirente = self._cursor.fetchone()
            if usertype=="impresa":
                self._cursor.execute("SELECT i.nome, i.via, i.cap, i.tel as telefono, i.email FROM Impresa i WHERE id=%s",(idUtente))
                acquirente = self._cursor.fetchone()
            if usertype=="utente":
                self._cursor.execute("SELECT u.nome, u.cognome, u.via, u.cap, u.tel as telefono, u.email FROM Utente u WHERE id=%s",(idUtente))
                acquirente = self._cursor.fetchone()

            order["acquirente"] = acquirente
            order["user"] = usertype
            order["img"]= 'data:image/jpeg;base64,'+ str(getFileEncode("products/",order["idBene"]))
        
        return data
    
    def checkOrder(self,username, id):
        self._cursor.execute("UPDATE Ordini SET checkOrdine=1 WHERE id=%s AND impresa = %s", (id, self.getUserId(username)))
        return self._cursor.rowcount > 0   
    
    def getMyOrders(self, username, data):
        offset=int(data.get("_page"))*int(data.get("_psize"))

        self._cursor.execute("select o.id, o.transazione, o.segnalato, o.confermato, o.quantita, i.id as nodoImpresa, o.checkOrdine, i.nome, i.tel as telefono , i.email, b.nome as nomeProdotto, b.id as idBene from Ordini o JOIN Impresa i on o.impresa=i.id JOIN Beni b on b.id=o.bene WHERE o.utente=%s and confermato = 0 ORDER BY o.id DESC LIMIT %s OFFSET %s",
            (
                self.getUserId(username),
                int(data.get("_psize")),
                offset
            )
        )
        
        data = self._cursor.fetchall()
        
        for order in data:
            order["img"]= 'data:image/jpeg;base64,'+ str(getFileEncode("products/",order["idBene"]))
        
        return data
        
    def confirmOrder(self, username, id, data):
        #! data -> [_a, _msg, _valutazione]
        self._cursor.execute("UPDATE Ordini SET confermato=1 WHERE id=%s",(id))
        
        if self._cursor.rowcount == 0:
            return False

        self._cursor.execute("INSERT INTO FeedbackOrdini(ordine, valutazione, messaggio, da, a) values(%s,%s,%s,%s,%s)",
            (
                id,
                data["_valutazione"],
                data["_msg"],
                self.getUserId(username),
                data["_a"]
            )
        )
        return self._cursor.rowcount > 0  
#endregion

#region #! Feedback
    def feedbackUser(self, data):
        #! data -> [_page, _psize, id]
        offset=int(data.get("_page"))*int(data.get("_psize"))
        dati = {}

        self._cursor.execute("SELECT fs.id, fs.valutazione, fs.messaggio, s.nome, u.nome as recensore FROM FeedbackServizi fs JOIN Richieste r on r.id=fs.richiesta JOIN Servizi s on r.servizio=s.id JOIN Utente u on fs.da=u.id WHERE fs.a=%s LIMIT %s OFFSET %s",
            (
                data.get("id"),
                int(data.get("_psize")),
                offset
            )
        )

        dati["_msg"] = self._cursor.fetchall()

        self._cursor.execute("SELECT AVG(valutazione) as media FROM FeedbackServizi WHERE a = %s",(data.get("id")))
        media= self._cursor.fetchone().get("media",None)
        dati["_media"] = int(3 if media is None else media)
        return dati
    
    def feedbackCompany(self, data):
        #! data -> [_page, _psize, id]
        offset=int(data.get("_page"))*int(data.get("_psize"))
        dati = {}

        self._cursor.execute("SELECT l.username, fo.id, fo.valutazione, fo.messaggio, o.quantita, b.nome  FROM Ordini o join FeedbackOrdini fo on o.id=fo.ordine JOIN Beni b on o.bene=b.id JOIN Login l on l.id=fo.da WHERE fo.a=%s LIMIT %s OFFSET %s",
            (
                data.get("id"),
                int(data.get("_psize")),
                offset
            )
        )# u.nome as recensore
        dati["_msg"] = self._cursor.fetchall()
        for msg in dati["_msg"]:
            usertype=self.getUserType(msg["username"])
            userid= self.getUserId(msg["username"])
            if usertype=="utente":
                self._cursor.execute("SELECT nome FROM Utente Where id=%s",(userid))
            if usertype=="impresa":
                self._cursor.execute("SELECT nome FROM Impresa Where id=%s",(userid))
            if usertype=="ente":
                self._cursor.execute("SELECT nome FROM Ente Where id=%s",(userid))
            msg["recensore"]=self._cursor.fetchone()["nome"]

        self._cursor.execute("SELECT AVG(valutazione) as media FROM FeedbackOrdini WHERE a = %s",(data.get("id")))
        media= self._cursor.fetchone().get("media",None)
        dati["_media"] = int(3 if media is None else media)

        return dati

#endregion


#region #? Servizi Comunita 
    def getEts(self):
        self._cursor.execute("SELECT id, nome FROM Ente")
        return self._cursor.fetchall()

    def addServiceCommunity(self, username, data):
        #!data -> [msg, date,bisognoSegnalato, idBisogno, idEnte]
        data["idBisogno"]=  None if data["idBisogno"] == 0 else data["idBisogno"]
        giorno = data["date"] 
        ora = 0
        self._cursor.execute("INSERT INTO `ServiziComunita`(`utente`, `ente`, `messaggio`, `data`, `orario`, `richiestaBisogno`, `bisogno`) VALUES (%s,%s,%s,%s,%s,%s,%s)",
            (
                self.getUserId(username),
                data["idEnte"],
                data["msg"],
                giorno,
                ora,
                data["bisognoSegnalato"],
                data["idBisogno"]
            )
        )
        return self._cursor.lastrowid
    
    def getServiceCommunity(self, username, data):
        offset=int(data.get("_page"))*int(data.get("_psize"))
        self._cursor.execute("SELECT s.id, s.utente, u.nome,u.cognome , s.messaggio, s.data, s.orario, s.richiestaBisogno, b.nome as nomeBisogno, b.descrizione as descrizioneBisogno, b.id as idBisogno FROM ServiziComunita s LEFT JOIN Bisogni b on b.id=s.bisogno JOIN  Utente u on s.utente=u.id WHERE s.ente = %s and s.rifiutato=0 and s.certificato=0 LIMIT %s OFFSET %s", 
            (
                self.getUserId(username),
                int(data.get("_psize")),
                offset
            )
        )
        data= self._cursor.fetchall()
        for service in data:
            ore= str(service["orario"].seconds//3600)
            minuti =(service["orario"].seconds//60)%60
            minuti = str(minuti) if minuti > 10 else "0"+str(minuti)
            service["orario"] = ore+":"+minuti

            service["data"] = str(service["data"])

            img = getFileEncode("comunityService/",str(service["id"]))
            service["img"] = img if img!=False else None

            if service["richiestaBisogno"]==1:
                imgPrima= getFileEncode("needs/",str(service["idBisogno"]))
                service["imgPrima"] = imgPrima if imgPrima!=False else None
        return data
        
    def confirmServiceCommunity(self,username, id):
        self._cursor.execute("UPDATE ServiziComunita SET certificato = 1 WHERE id = %s and ente = %s",(id,self.getUserId(username)))

        percentuale=int(self.getPercentualeETS())
        andron=int(self.getAndronHour())
        andronETS = int((andron*percentuale)/100)
        self._cursor.execute("UPDATE Saldo SET andron= andron + %s WHERE id=%s",(andronETS,self.getUserId(username)))

        self._cursor.execute("SELECT utente FROM ServiziComunita WHERE id=%s",(id))
        idUtente= self._cursor.fetchone()["utente"]

        self._cursor.execute("UPDATE Saldo set andron = andron + %s WHERE id=%s",(andron, idUtente))

        return True

    def refuseServiceCommunity(self,username, id):
        self._cursor.execute("UPDATE ServiziComunita SET rifiutato = 1 WHERE id = %s and ente = %s",(id,self.getUserId(username)))
        return True
#endregion

#region #! Bisogni
    def getNeeds(self, data):
        #! data -> [_page, _psize]
        offset=int(data.get("_page"))*int(data.get("_psize"))
        self._cursor.execute("SELECT b.*, u.nome, u.cognome FROM Bisogni b JOIN Utente u on b.utente=u.id WHERE accettato = 1 LIMIT %s OFFSET %s",
            (
                int(data.get("_psize")),
                offset
            )
        )
        data = self._cursor.fetchall()
        for need in data:
            need["img"]= getFileEncode("needs/",need["id"])
        
        return data
    
    def getAllNeeds(self):
        self._cursor.execute("SELECT b.nome, b.id FROM Bisogni b WHERE accettato = 1",)
        return self._cursor.fetchall()
    
    def addBisogno(self,username,data):
        #! data -> [nome,descrizione,descrizione,citta,indirizzo]
        
        data["posizione"] = str(data["posizione"]).replace("'",'"')
        self._cursor.execute("INSERT INTO `Bisogni`(`utente`, `nome`, `descrizione`, `posizione`,`citta`,`indirizzo`) VALUES (%s,%s,%s,%s,%s,%s)",
            (
                self.getUserId(username),
                data["nome"],
                data["descrizione"],
                data["posizione"],
                data["citta"],
                data["indirizzo"]
            )
        )
        
        return self._cursor.lastrowid

#endregion

#endregion


#region #!GARANTE


    def logAdmin(self,data):
        username=data["login"]
        self._cursor.execute("SELECT salt FROM notAdministration WHERE login = %s",(username))
        login = (self._cursor.fetchone())
        if login is None: 
            return False

        salt = login["salt"]
        self._cursor.execute("select login from notAdministration where password=md5(%s)",(data["password"]+salt))
        check=self._cursor.fetchone()
        if check is None:
            return False
        check=check.get("login", None)
        return username == check
        
    def isAdmin(self,data):
        return True

    #region #!Settings
    def setAndronHour(self,settings):
        self._cursor.execute("UPDATE notAdministration SET JsonValue= JSON_SET(JsonValue, '$.andron', %s)",(settings["andron"]))
        return True
    

    def getAndronHour(self):
        self._cursor.execute("SELECT JSON_EXTRACT(JsonValue,'$.andron') as andron FROM notAdministration")
        return self._cursor.fetchone()["andron"]

    def setPercentualeETS(self,settings):
        self._cursor.execute("UPDATE notAdministration SET JsonValue= JSON_SET(JsonValue,'$.percentuale', %s)",(settings["percentuale"]))
        return True
    
    def getPercentualeETS(self):
        self._cursor.execute("SELECT JSON_EXTRACT(JsonValue,'$.percentuale') as percentuale FROM notAdministration")
        return self._cursor.fetchone()["percentuale"]
    

    def getSettings(self):
        self._cursor.execute("SELECT JsonValue AS 'result' FROM `notAdministration`")
        return self._cursor.fetchone()["result"]

    #endregion 


    #region #! Account Utenti
    def activateAccount(self,id):
        self._cursor.execute("UPDATE Utente SET attivo = 1 WHERE id = %s", (id))
        self._cursor.execute("INSERT INTO Saldo (id, andron) VALUES (%s,%s)", (id, self.getAndronHour())) # Da togliere nella versione con blockchain
        self._cursor.execute("SELECT nome,cognome FROM `Utente` where id =%s", (id))
        return self._cursor.fetchone()
    
    def refuseAccount(self,id):
        self._cursor.execute("DELETE FROM `Utente` WHERE id=%s",id)
        self._cursor.execute("DELETE FROM `Login` WHERE id=%s",id)
        return True

    def userToActivate(self,):
        self._cursor.execute("SELECT u.id, u.nome, u.cognome, u.cf, u.tel, u.email, u.stato, u.regione, u.via, u.cap FROM `Utente` u WHERE attivo = 0")
        utenti = self._cursor.fetchall()

        for u in utenti:
            u["foto"] =getFileEncode("proPic/",u["id"])

        return utenti 
    #endregion 

    #region #! Account Impresa

    def activateImpresa(self,id):
        self._cursor.execute("UPDATE Impresa SET attivo = 1 WHERE id = %s", (id))
        self._cursor.execute("INSERT INTO Saldo (id, andron) VALUES (%s,%s)", (id, self.getAndronHour())) # Da togliere nella versione con blockchain
        self._cursor.execute("SELECT i.nome, l.username FROM `Impresa` as i JOIN Login as l on l.id=i.id where i.id =%s", (id))
        return self._cursor.fetchone()
    
    def refuseImpresa(self,id):
        self._cursor.execute("DELETE FROM `Impresa` WHERE id=%s",id)
        self._cursor.execute("DELETE FROM `Login` WHERE id=%s",id)
        return True
    
    def impresaToActivate(self):
        self._cursor.execute("SELECT i.id, i.nome, i.cf, i.tel, i.email, i.stato, i.regione, i.via, i.cap, i.iva FROM `Impresa` i WHERE i.attivo = 0")
        impresa = self._cursor.fetchall()

        for i in impresa:
            i["foto"] =getFileEncode("proPic/",i["id"])

        return impresa 

    #endregion 

    #region #! Prodotti

    def productsToactivate(self):
        self._cursor.execute("SELECT b.*, i.nome as fornitore FROM Beni b JOIN Impresa i ON i.id=b.impresa WHERE accettato = 0 AND eliminato = 0 and rifiutato=0",)
        data = self._cursor.fetchall()
        for product in data:
            product["img"]= 'data:image/jpeg;base64,'+ str(getFileEncode("products/",product["id"]))
        return data

    def activateProduct(self, id):
        self._cursor.execute("UPDATE Beni SET accettato=1 WHERE id=%s",(id))
        return True

    def refuseProduct(self,id):
        self._cursor.execute("UPDATE Beni SET rifiutato=1 WHERE id=%s",(id))
        return True

    #endregion


    #region #! Abbonamenti

    def subsToactivate(self):
        self._cursor.execute("SELECT b.*, i.nome as fornitore FROM Abbonamenti b JOIN Impresa i ON i.id=b.impresa WHERE accettato = 0 AND eliminato = 0 and rifiutato=0")
        data = self._cursor.fetchall()
        for subscription in data:
            subscription["img"]= 'data:image/jpeg;base64,'+ str(getFileEncode("subs/",subscription["id"]))
        return data

    def activateSubscription(self, id):
        self._cursor.execute("UPDATE Abbonamenti SET accettato=1 WHERE id=%s",(id))
        return True

    def refuseSubscription(self,id):
        self._cursor.execute("UPDATE Abbonamenti SET rifiutato=1 WHERE id=%s",(id))
        return True

    #endregion



    #region #! Service

    def servicesToactivate(self):
        self._cursor.execute("SELECT s.*, u.nome as nomeUtente, u.cognome as cognomeUtente FROM Servizi s JOIN Utente u on u.id=s.utente WHERE s.eliminato = 0 and s.accettato = 0 and rifiutato=0")
        
        return self._cursor.fetchall()
    
    def activateService(self,id):
        self._cursor.execute("UPDATE Servizi set accettato = 1 WHERE id=%s",(id))
        return True

    def refuseService(self,id):
        self._cursor.execute("UPDATE Servizi set rifiutato = 1 WHERE id=%s",(id))
        return True
    #endregion

    #region #! Needs
    
    def needsToactivate(self):
        self._cursor.execute("SELECT b.*, u.nome, u.cognome FROM Bisogni b JOIN Utente u on b.utente=u.id WHERE b.accettato = 0",)
        data = self._cursor.fetchall()
        for need in data:
            need["img"]= 'data:image/jpeg;base64,'+ str(getFileEncode("needs/",need["id"]))
        
        return data
    
    def activateNeed(self,id):
        self._cursor.execute("UPDATE Bisogni SET accettato=1 WHERE id=%s",(id))
        return True

    def refuseNeed(self,id):
        self._cursor.execute("DELETE FROM Bisogni WHERE id=%s",(id))
        return True
    #endregion

    #region #! Management

    def getReportUsers(self):
        self._cursor.execute("SELECT richiesta FROM `SegnalazioniServizi` JOIN Richieste r on richiesta=r.id WHERE gestito = 0 and r.stato!='confermato' and r.stato!='concluso' GROUP BY richiesta")
        servizi = self._cursor.fetchall()
        
        result = []
        
        for s in servizi:
            self._cursor.execute("SELECT r.messaggio, r.richiedente as idRichiedente, s.nome as nomeServizio, s.descrizione as descrizioneServizio,u.id as idEsponente ,u.nome, u.cognome FROM Richieste r JOIN Utente u on u.id=r.esponente JOIN Servizi s on r.servizio=s.id WHERE r.id=%s",s["richiesta"])
            partial=self._cursor.fetchone()
            data = {
                "idRichiesta" : s["richiesta"],
                "idEsponente" : partial["idEsponente"],
                "nomeServizio" : partial["nomeServizio"],
                "descrizioneServizio": partial["descrizioneServizio"],
                "nomeEsponente" : partial["nome"],
                "cognomeEsponente" : partial["cognome"],
                "messaggioRichiesta": partial["messaggio"]
            }
            result.append(data)


        for s in result:
            self._cursor.execute("SELECT s.messaggio, u.id, u.nome, u.cognome, u.tel, u.email FROM SegnalazioniServizi s JOIN Utente u on u.id=s.da WHERE s.richiesta=%s", s["idRichiesta"])
            partial = self._cursor.fetchall()

            for u in partial:
                u["esponente"]= s["idEsponente"] == u["id"]
            
            s["segnalazioni"]=partial

        return result
    

    def concludiSegnalazioneServizio(self,idRichiesta,idEsponente):
        self._cursor.execute("SELECT r.ore, s.andron FROM Richieste r JOIN Servizi s on s.id=r.servizio WHERE r.id=%s",(idRichiesta))
        dati = self._cursor.fetchone()
        andron = int(dati["ore"])*int(dati["andron"])

        self._cursor.execute("UPDATE Saldo set andron=andron+%s WHERE id = %s", (andron,idEsponente))
        self._cursor.execute("UPDATE SegnalazioniServizi SET gestito = 1 WHERE richiesta = %s",(idRichiesta))
        self._cursor.execute("UPDATE Richieste SET stato = 'confermato' WHERE id = %s",(idRichiesta))

        return True

    def rimborsaSegnalazioneServizio(self,idRichiesta, idRichiedente):
        self._cursor.execute("SELECT r.ore, s.andron FROM Richieste r JOIN Servizi s on s.id=r.servizio WHERE r.id=%s",(idRichiesta))
        dati = self._cursor.fetchone()
        andron = int(dati["ore"])*int(dati["andron"])

        self._cursor.execute("UPDATE Saldo set andron=andron+%s WHERE id = %s", (andron,idRichiedente))
        self._cursor.execute("UPDATE SegnalazioniServizi SET gestito = 1 WHERE richiesta = %s",(idRichiesta))
        self._cursor.execute("UPDATE Richieste SET stato = 'concluso' WHERE id = %s",(idRichiesta))

        return True  
    #endregion

    #region #! Management Orders

    def getReportOrders(self):
        self._cursor.execute("SELECT o.id as idOrdine, t.id as idTransazione, t.causale, l.username, s.id, s.da, s.messaggio, i.nome, i.tel, i.email, i.id as idImpresa FROM SegnalazioniOrdini s JOIN Impresa i on s.a=i.id JOIN Ordini o on s.ordine=o.id JOIN Login l on l.id=s.da  JOIN Transazioni t on o.transazione=t.id WHERE s.gestito = 0 AND o.confermato = 0")
        result = self._cursor.fetchall()
        for r in result:
            account = self.getUserType(r["username"])
            if account=="utente":
                self._cursor.execute("SELECT nome, cognome, tel, email FROM Utente WHERE id=%s",(r["da"]))
                r["tipoaccount"] = account
            elif account=="ente":
                self._cursor.execute("SELECT nome, email, tel FROM Ente WHERE id=%s",(r["da"]))
                r["tipoaccount"] = account
            elif account=="impresa":
                r["tipoaccount"] = account
                self._cursor.execute("SELECT nome, tel, email FROM Impresa WHERE id=%s",(r["da"]))
            r["segnalatore"] = self._cursor.fetchall()
        return result
    
    def concludiSegnalazioneOrdine(self,idOrdine,idSegnalazione):
        self._cursor.execute("UPDATE Ordini SET confermato = 1 WHERE id=%s", (idOrdine))
        self._cursor.execute("UPDATE SegnalazioniOrdini SET gestito = 1 WHERE id=%s", (idSegnalazione))
        return True
    
    def rimborsaSegnalazioneOrdine(self,idSegnalatore, idImpresa, idOrdine,idSegnalazione, idTransazione):
        self.concludiSegnalazioneOrdine(idOrdine,idSegnalazione)
        self._cursor.execute("SELECT andron FROM Transazioni WHERE id= %s",idTransazione)
        andron= self._cursor.fetchone()["andron"]
        
        self._cursor.execute("UPDATE Saldo set andron=andron+%s WHERE id = %s", (andron,idSegnalatore))
        self._cursor.execute("UPDATE Saldo set andron=andron-%s WHERE id = %s", (andron,idImpresa))

        return True

    #endregion


    
#endregion

    def getAndronCostFromService(self,id):
        self._cursor.execute("SELECT andron FROM Servizi WHERE id = %s",(id))
        return self._cursor.fetchone()["andron"]
    
    def getAndroCostFromSubscription(self, id):
        self._cursor.execute("SELECT prezzo FROM Abbonamenti WHERE id = %s",(id))
        return self._cursor.fetchone()["prezzo"]
