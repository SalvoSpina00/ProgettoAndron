from blockchainRequest import *
import uuid
import json
import random




def test_create_get_getAll_getHistory_Wallet():
    user = str(uuid.uuid4())
    ets = str(uuid.uuid4())
    impresa = str(uuid.uuid4())

    print("Creazione utente 1 - Utente:"+ user)
    AndronCall.createUser(user,"utente")
    print("Creazione utente 2 - ETS :"+ ets)
    AndronCall.createUser(ets,"ets")
    print("Creazione utente 3 - Impresa :"+ impresa)
    AndronCall.createUser(impresa,"impresa")

    print("\n\nTEST getAll\n")
    call = AndronCall.getAll_asset(Assets.WALLET)
    for wallet in call["message"] :
        print(json.dumps(wallet, indent = 4))
        print("\n")
    
    print("\nTEST get su utente 1 - Utente:" + user)
    print(json.dumps(AndronCall.get_asset(Assets.WALLET,user),indent =4))

    print("\nModifica su Utente 1 e Utente 2 con Reward")
    print(json.dumps(AndronCall.rewardUserETS(user,ets,1,4),indent =4))

    print("\nTEST getHistory su Utente 1 (UTENTE) per verificare la modifica")
    print(json.dumps(AndronCall.get_assetHistory(Assets.WALLET,user),indent =4))

    print("\nTEST getHistory su Utente 2 (ETS) per verificare la modifica")
    print(json.dumps(AndronCall.get_assetHistory(Assets.WALLET,user),indent =4))

    print("\nTEST andronHistory -> Deve contenere la creazione e l'aggiornamento dell'utente")
    print(AndronCall.get_assetHistory(Assets.ANDRONHISTORY,user))

    print("\nTEST andronHistory -> Deve contenere la creazione e l'aggiornamento dell'ets")
    print(AndronCall.get_assetHistory(Assets.ANDRONHISTORY,ets))

def test_update_get_getAll_getHistory_Settings():
    print("TEST getAll Setting => deve contenerne solo 1")
    print(json.dumps(AndronCall.getAll_asset(Assets.SETTINGS),indent = 4))

    print("\n\nTEST get Setting")
    print(json.dumps(AndronCall.get_asset(Assets.SETTINGS,"Andron"),indent = 4))

    print("\n\nTEST getHistory Settings")
    print(json.dumps(AndronCall.get_assetHistory(Assets.SETTINGS,"Andron"),indent = 4))

    print("\nTEST modifica ratio")
    print(AndronCall.setting_update(Settings.RATIO,14))

    print("\nTEST modifica Andron")
    print(AndronCall.setting_update(Settings.ANDRON,4))

    print("\nTEST modifica Reward")
    print(AndronCall.setting_update(Settings.REWARD,100))

    print("\n\nTEST get Setting => Valori aggiornati")
    print(json.dumps(AndronCall.get_asset(Assets.SETTINGS,"Andron"),indent = 4))

    print("\n\nTEST getHistory Settings => 3 modifiche in più della precedente")
    print(json.dumps(AndronCall.get_assetHistory(Assets.SETTINGS,"Andron"),indent = 4))

    print("\n\nTEST Creazione nuovo utente per verificare il cambio delle settings")
    userID=str(uuid.uuid4())
    AndronCall.createUser(userID,"utente")
    print(json.dumps(AndronCall.get_asset(Assets.WALLET,userID),indent=4))

def test_create_get_getAll_getHistory_Transaction():
    user = str(uuid.uuid4())
    ets = str(uuid.uuid4())
    impresa = str(uuid.uuid4())

    print("Creazione utente 1 - Utente:"+ user)
    AndronCall.createUser(user,"utente")
    print("Creazione utente 2 - ETS :"+ ets)
    AndronCall.createUser(ets,"ets")
    print("Creazione utente 3 - Impresa :"+ impresa)
    AndronCall.createUser(impresa,"impresa")

    print("Transazione tra utente e ETS -> Deve dare errore")
    tran = str(uuid.uuid4())
    print(tran)
    print(AndronCall.transaction(tran,user,ets,200,"prova"))
    print(AndronCall.get_asset(Assets.TRANSACTION,tran))

    print("Transazione tra utente e ETS -> OK")
    tran = str(uuid.uuid4())
    print(AndronCall.transaction(tran,user,ets,2,"provaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafgdgdfgfdgfdgdfgdgdgdgdgdfgdgdgdgdfgdfgfgdfgdgfg"))
    print(AndronCall.get_asset(Assets.TRANSACTION,tran))

    print("Transazione tra utente e Impresa -> OK")
    tran = str(uuid.uuid4())
    print(AndronCall.transaction(tran,user,impresa,2,"provaprovaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafgdgdfgfdgfdgdfgdgdgdgdgdfgdgdgdgdfgdfgfgdfgdgfg"))
    print(AndronCall.get_asset(Assets.TRANSACTION,tran))

    print("Transazione tra ETS e Impresa -> OK")
    tran = str(uuid.uuid4())
    print(AndronCall.transaction(tran,ets,impresa,2,"provavprovaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafgdgdfgfdgfdgdfgdgdgdgdgdfgdgdgdgdfgdfgfgdfgdgfg"))
    print(AndronCall.get_asset(Assets.TRANSACTION,tran))

    print("Transazione tra ETS e Impresa -> ERRORE")
    print(AndronCall.transaction(tran,ets,impresa,3,"provaprovaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafgdgdfgfdgfdgdfgdgdgdgdgdfgdgdgdgdfgdfgfgdfgdgfg"))
    print(AndronCall.get_asset(Assets.TRANSACTION,tran))

def test_create_withdraw_get_getAll_getHistory_Deposit():
    user = str(uuid.uuid4())
    user2 = str(uuid.uuid4())
    ets = str(uuid.uuid4())
    impresa = str(uuid.uuid4())

    print("Creazione utente 1 - Utente:"+ user)
    AndronCall.createUser(user,"utente")
    print("Creazione utente 2 - Utente2:"+ user2)
    AndronCall.createUser(user2,"utente")
    print("Creazione utente 3 - ETS :"+ ets)
    AndronCall.createUser(ets,"ets")
    print("Creazione utente 4 - Impresa :"+ impresa)
    AndronCall.createUser(impresa,"impresa")

    print("\n\n\nCreazione deposito UTENTE - ETS -> NO")
    userDeposit = str(uuid.uuid4())
    print(AndronCall.deposit(user,ets,1,"1234567890123457123456789012345712345678901234571234567890123457",userDeposit))

    print("\n\n\nCreazione deposito ETS -> NO")
    userDeposit = str(uuid.uuid4())
    print(AndronCall.deposit(ets,user,1,"1234567890123457123456789012345712345678901234571234567890123457",userDeposit))
    
    print("\n\n\nCreazione deposito IMPRESA -> NO")
    userDeposit = str(uuid.uuid4())
    print(AndronCall.deposit(impresa,ets,1,"1234567890123457123456789012345712345678901234571234567890123457",userDeposit))
    
    print("\n\n\nCreazione deposito UTENTE - UTENTE2 -> SI")
    userDeposit = str(uuid.uuid4())
    print(AndronCall.deposit(user,user2,1,"1234567890123457123456789012345712345678901234571234567890123457",userDeposit))

    print("\n\n\nCreazione DI NUOVO deposito UTENTE - UTENTE2 -> NO")
    print(AndronCall.deposit(user,user2,1,"1234567890123457123456789012345712345678901234571234567890123457",userDeposit))

    print("\n\n\nGET deposito UTENTE - UTENTE2 -> SI")
    print(AndronCall.get_asset(Assets.DEPOSIT,userDeposit))

    print("\n\n WITHDRAW DI UTENTE2-> SI")
    print(AndronCall.withdraw(userDeposit,user2,"asdadasdasdadasdsadasdasdasdasdasdasdasdasdasdasdasdasdadasda"))
    
    print("\n\n WITHDRAW DI UTENTE2-> NO")
    print(AndronCall.withdraw(userDeposit,user2,"asdadasdasdadasdsadasdasdasdasdasdasdasdasdasdasdasdasdadasda"))

    print("\n\n GETHISTORY Despoit")
    print(json.dumps(AndronCall.get_assetHistory(Assets.DEPOSIT,userDeposit), indent=4))

    print("\n\n GET transaction del deposito -> SI")
    print(AndronCall.get_asset(Assets.TRANSACTION,userDeposit))

    print("\n\nTEST getAll\n")
    call = AndronCall.getAll_asset(Assets.WALLET)
    for wallet in call["message"] :
        print(json.dumps(wallet, indent = 4))
        print("\n")
    

    print("\n\n\nCreazione deposito UTENTE2 - UTENTE1 -> SI")
    userDeposit = str(uuid.uuid4())
    print(AndronCall.deposit(user2,user,1,"1234567890123457123456789012345712345678901234571234567890123457",userDeposit))

    print("\n\n WITHDRAW DI UTENTE2 (DA SOLO)-> SI")
    print(AndronCall.withdraw(userDeposit,user2,"asdadasdasdadasdsadasdasdasdasdasdasdasdasdasdasdasdasdadasda"))

    print("\n\n GET transaction del deposito -> NO")
    print(AndronCall.get_asset(Assets.TRANSACTION,userDeposit))

def test_create_get_getAll_getValue_AndronHistory():

    print("\n\nAndron generati dalle Iscrizioni => 0")
    print(AndronCall.get_andronHistory(AndronHistory.GENERATED))

    print("\n\nAndron depositati => 0")
    print(AndronCall.get_andronHistory(AndronHistory.DEPOSITED))

    print("\n\nAndron disponibili => 0")
    print(AndronCall.get_andronHistory(AndronHistory.AVAILABLE))

    uuidList = [str(uuid.uuid4()) for _ in range(100)]

    print("Creo 100 utenti")
    for userID in uuidList:
        AndronCall.createUser(userID,random.choice([e.value for e in AccountType]))

    users = AndronCall.getAll_asset(Assets.WALLET)
    print(len(users["message"]))
    
    print("\n\nAndron generati dalle Iscrizioni => devono essere 2000")
    print(AndronCall.get_andronHistory(AndronHistory.GENERATED))

    print("\n\nAndron depoditati => 0")
    print(AndronCall.get_andronHistory(AndronHistory.DEPOSITED))

    print("\n\nAndron disponibili => Uguale a quelli generati")
    print(AndronCall.get_andronHistory(AndronHistory.AVAILABLE))

    utenti = []
    ets = []
    for user in users["message"]:
        if(user["Record"]["owner"]["account"]==AccountType.USER.value):
            utenti.append(user["Record"])
        elif (user["Record"]["owner"]["account"]== AccountType.ETS.value):
            ets.append(user["Record"])

    print("\nEffettuo un tot di depositi")
    depositSuccess= 0
    depositRitirabili = {}
    for user in utenti:
        depositante = user["id"].split("-",1)[1]
        ritirante = random.choice(utenti)["id"].split("-",1)[1]
        uuidDeposit = str(uuid.uuid4())
        res = AndronCall.deposit(depositante,ritirante,1,"provaaaaaaafhshfslkjflskhflshfljkshfljhsldfhskljfhslkjfhslkjfhslkdjfhlksdhfs",uuidDeposit)
        depositSuccess = depositSuccess if res["status"]=="error" else depositSuccess+1 
        depositRitirabili[uuidDeposit] = [depositante,ritirante]

    print("\n\nAndron generati dalle Iscrizioni => 2000")
    print(AndronCall.get_andronHistory(AndronHistory.GENERATED))

    print("\n\nAndron depoditati => più di 0")
    print(AndronCall.get_andronHistory(AndronHistory.DEPOSITED))

    print("\n\nAndron disponibili => generati - depositati")
    print(AndronCall.get_andronHistory(AndronHistory.AVAILABLE))

    print("\n\nDepositi eseguiti con successo dev'essere uguale a depositati")
    print(depositSuccess)

    print("\n\nRitiro di tutti i depositi")
    for key in depositRitirabili.keys():
        AndronCall.withdraw(key,random.choice(depositRitirabili[key]),"adajkhdlkshlfkjhslkfhskjdhflkshflksdhfklhasldfhklshfklashfkjflksahfk")

    print("\n\nAndron generati dalle Iscrizioni => 2000")
    print(AndronCall.get_andronHistory(AndronHistory.GENERATED))

    print("\n\nAndron depoditati => 0")
    print(AndronCall.get_andronHistory(AndronHistory.DEPOSITED))

    print("\n\nAndron disponibili => 2000")
    print(AndronCall.get_andronHistory(AndronHistory.AVAILABLE))


    print("\n\n Effettuo delle transazioni random")
    transactionUUID = []
    for key in uuidList:
        transuuid = str(uuid.uuid4())
        print(AndronCall.transaction(transuuid,key, random.choice(uuidList),1, "provaprovaprovaporvaporvaporvaporvaprovaprovaporva"))
        transactionUUID.append(transuuid)

    print("\n\nAndron generati dalle Iscrizioni => 2000")
    print(AndronCall.get_andronHistory(AndronHistory.GENERATED))

    print("\n\nAndron depositati => 0")
    print(AndronCall.get_andronHistory(AndronHistory.DEPOSITED))

    print("\n\nAndron disponibili => 2000")
    print(AndronCall.get_andronHistory(AndronHistory.AVAILABLE))

    print("\n\nCreo servizi alla comunità random")
    uuidReward = {}
    for user in utenti:
        uuids = str(uuid.uuid4())
        userID = user["id"].split("-",1)[1]
        etsID = random.choice(ets)["id"].split("-",1)[1]
        AndronCall.rewardUserETS(userID,etsID,1,uuids)
        uuidReward[uuids] = [userID,etsID]
    
    print("\n\nAndron generati dalle Iscrizioni => 2000")
    print(AndronCall.get_andronHistory(AndronHistory.GENERATED))

    print("\n\nAndron depositati => 0")
    print(AndronCall.get_andronHistory(AndronHistory.DEPOSITED))

    print("\n\nAndron disponibili => 2000")
    print(AndronCall.get_andronHistory(AndronHistory.AVAILABLE))

    print("\n\nRipremia per lo stesso servizio => NO")
    otheruuid = random.choice([k for k in uuidReward.keys()])
    print(AndronCall.rewardUserETS(uuidReward[otheruuid][0],uuidReward[otheruuid][1],1,otheruuid))

if __name__=="__main__":
    test_create_get_getAll_getHistory_Wallet()          #*=> OK
    test_update_get_getAll_getHistory_Settings()        #*=> OK
    test_create_get_getAll_getHistory_Transaction()     #*=> OK
    test_create_withdraw_get_getAll_getHistory_Deposit()#*=>OK
    test_create_get_getAll_getValue_AndronHistory()     #*=>OK

