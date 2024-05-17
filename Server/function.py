from flask import make_response
import string, random, base64, traceback

validRequest = {
    "login" : [("username", True), ("password", True)],
    "updateInfo": [
        ("_telefono", True),
        ("_mail", True),
        ("_stato", True),
        ("_regione", True),
        ("_citta", True),
        ("_via", True),
        ("_cap", True),
    ],
    "updatePassword":[
        ("_oldpsw",True, None),
        ("_newpsw",True, None)
    ],
    "addUser": [
        ("_username", True, str, 7, 50),
        ("_password", True, str, 8, 50),
        ("_nome", True, str, 3, 30),
        ("_cognome", True, str, 3, 30),
        ("_date", True, None),
        ("_cf", True, str, 16, 16),
        ("_telefono", True, str, 10, 15),
        ("_mail", True, str, 15, 50),
        ("_stato", True, str, 4, 20),
        ("_regione", True, str, 4, 20),
        ("_citta", True, str, 4, 30),
        ("_via", True, str, 4, 100),
        ("_cap", True, str, 5,5),
    ],
    "addImpresa": [
        ("_username", True, str, 7, 50),
        ("_password", True, str, 8, 50),
        ("_nome", True, str, 5, 50),
        ("_tipo", True, str, 5, 30),
        ("_iva", True, str, 5, 50),
        ("_cf", True, str, 16,16),
        ("_telefono", True, str, 10,15),
        ("_mail", True, str, 15,30),
        ("_stato", True, str, 4,20),
        ("_regione", True, str, 4,20),
        ("_citta", True, 4, 30),
        ("_via", True, 4, 50),
        ("_cap", True, 5,5),
    ],
    "addEnte": [
        ("_username", True, str, 7, 50),
        ("_password", True, str, 8, 50),
        ("_nome", True, str, 5, 30),
        ("_telefono", True, str, 10, 15),
        ("_email", True, str, 15,30),
        ("_regione", True,str, 5, 30),
        ("_citta", True, str, 4 , 30),
    ],

    "transaction":[
        ("_page", True),
        ("_psize", True),
    ],
    #!Servizi
    "addService" : [
        ("nome", True, str, 4, 30),
        ("descrizione", True, str, 0, 300),
        ("preavviso",True, int, 0, 4 ),
        ("ore",True, int, 0, 4)
    ],
    "getServices":[
        ("_page", True),
        ("_psize",True),
        ("filtro",True),
        ("termine",False)
    ],
    "newRequest":[
        ("_msg",True, str, 5, 200),
        ("_data",True, None),
        ("_ore",True, int, 1, 5)
    ],
    #!Request
    "updateMyRequest" : [("_stato", True)],
    "confirmMyRequest" : [("_msg",True,str, 5, 300),("_valutazione",True,int,1,5)],
    #!Segnalazioni
    "report" : [
        ("id",True),
        ("_msg",True),
        ("utente",True),
        ("_tipo",True)
    ],
    #!Products
    "addProducts": [
        ("nome", True),
        ("marca", True),
        ("descrizione", True),
        ("foto", True),
        ("prezzo", True),
        ("categoria", True),
        ("quantita", True)
    ],
    "addProductQuantity": [("quantita",True)],
    "getProducts": [
        ("_page",True),
        ("_psize",True),
        ("filtro",True),
        ("termine",False),
        ("min",False),
        ("max",False),
    ],
    #!Subs
    "addSubs":[
        ("nome", True, str, 5, 50),
        ("descrizione", True, str, 5, 500),
        ("prezzo",True, int, 1, 50),
    ],
    "getSubs":[
        ("_page",True),
        ("_psize",True),
        ("filtro",True),
        ("termine",False)
    ],

    #!OrderSubs
    "getMyBuySubs": [
        ("_page",True),
        ("_psize",True)
    ],
    #!Orders
    "getMyOrders": [
        ("_page",True),
        ("_psize",True)
    ],
    "confirmOrder": [
        ("_a",True),
        ("_msg",True),
        ("_valutazione",True)
    ],
    #!Feedback
    "feedback": [
        ("_page", True),
        ("_psize", True),
        ("id", True),
        ("tipo", True)
    ],
    #!Needs
    "postNeeds" : [
        ("nome", True),
        ("descrizione", True),
        ("indirizzo",True),
        ("citta",True)
    ],
    "getNeeds":[
        ("_all", True),
        ("_page",False),
        ("_psize",False)
    ],
    #!ServiziComunita
    "postServiceComunity":[
        ("msg",True),
        ("date",True),
        ("bisognoSegnalato",True),
        ("idEnte",True),
        ("idBisogno", False)
    ]
}

def checkData(data,validation):
    if data is None or not bool(data):
        return False
    for v in validation:
        campo = data.get(v[0], None)
        if campo is None or (
            v[1] and campo != None and str(campo).replace(" ", "") == ""
        ):#and  (v[2].get("min")< len(campo) or len(campo) > v[2].get("min") ):
            print(v[0])
            return False
    return True

def createResponse(allowsMethods):
    response=make_response()
    response.headers.set("Access-Control-Allow-Origin", "*")
    response.headers.set("Access-Control-Allow-Methods", allowsMethods)
    response.headers.set("Content-Type", "application/json")
    return response

def createSalt(length):
    letters_and_digits = string.ascii_letters + string.digits
    return ''.join((random.choice(letters_and_digits) for i in range(length)))


def getFileEncode(path,id):
    try:
        with open("Server_File_Storage/"+path+str(id)+".jpg", "rb") as file:
            encoded = base64.b64encode(file.read()).decode('utf-8')
        return encoded 
    except Exception as e:
        print(traceback.format_exc())
        return False

def saveFile(path,id,data):
    try:
        imgdata = base64.b64decode(data)
        with open("Server_File_Storage/"+path+str(id)+".jpg", 'wb') as f:
            f.write(imgdata)
        return True
    except Exception as e:
        print(traceback.format_exc())
        return False