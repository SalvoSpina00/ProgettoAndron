import requests as r
from enum import Enum

baseURL = "http://localhost"
port = 8080
url=baseURL+":"+str(port)


def get(path):
    try:
        return r.get(url+path).json() 
    except Exception as e:
        print(e)
        return False

def post(path,data):
    try:
        return r.post(url+path,json=data).json() 
    except Exception as e:
        print(e)
        return False

def put(path,data={}):
    try:
        return r.put(url+path,json=data).json() 
    except Exception as e:
        print(e)
        return False



class Assets(Enum):
    WALLET        = "wallet"
    TRANSACTION   = "transaction"
    ANDRONHISTORY = "andronHistory"
    DEPOSIT       = "deposit"
    SETTINGS      = "settings"

class Settings(Enum):
    RATIO  =    "ratio"
    ANDRON =    "andron"
    REWARD =    "reward"

class AndronHistory(Enum):
    GENERATED = "generated"
    AVAILABLE = "available"
    DEPOSITED = "deposited"

class AccountType(Enum):
    USER = "utente"
    ETS  = "ets"
    IMPRESA = "impresa"


class AndronCall:
    #*OK
    @staticmethod
    def createUser(id,account, nome, cognome):
        return post(
            "/wallet",
            {
                "walletID" : id,
                "user" : {
                    "nome": nome,
                    "cognome": cognome,
                    "account": account.value
                }
            }
        )
        
    @staticmethod
    def rewardUserETS(user,ets,hour,serviceID):
        return post(
            "/wallet/reward",
            {
                "user" : user, 
                "ets":   ets,
                "hour":  hour,
                "service": serviceID
            }
        )

    @staticmethod
    def deposit(depositorID, allowerID, amount, reasonDeposit, uuid):
        return post(
            "/deposit",
            {
                "depositorID":          depositorID,
                "allowedWithdrawer":    allowerID,
                "amount":               amount,
                "reasonDeposit":        reasonDeposit, 
                "uuid":                 uuid
            }
        )

    @staticmethod
    def withdraw(id, withdrawerID, reason):
        return put(
            "/deposit/"+id,
            {
                "withdrawer": withdrawerID, 
                "reasonWithdraw": reason
            }
        )

    @staticmethod
    def transaction(uuid,fromID,toID,amount,reason):
        return post(
            "/transaction",
            {
                "uuid":uuid,
                "fromID":fromID,
                "toID":toID,
                "amount":amount,
                "reason":reason
            }
        )
    
    @staticmethod
    def get_assetHistory(asset,id):
        if asset not in Assets : 
            return False
        return get(f'/{asset.value}/history/{id}')

    @staticmethod
    def getAll_asset(asset):
        if asset not in Assets : 
            return False
        return get("/"+asset.value)

    @staticmethod
    def get_asset(asset,id):
        if asset not in Assets : 
            return False
        return get(f'/{asset.value}/{id}')

    @staticmethod
    def get_andronHistory(options):
        if options not in AndronHistory:
            return False
        return get("/andronHistory/"+options.value)

    #*OK
    @staticmethod
    def setting_update(options,value):
        if options not in Settings:
            return False
        return put(
            "/setting/"+options.value,
            {options.value: value}
        )




    

