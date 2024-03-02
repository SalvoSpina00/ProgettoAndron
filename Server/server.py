from flask import Flask, jsonify, request, json
from flask_jwt_extended import *
from flask_cors import CORS
from db import *
from function import *
from mailSender import registerEmail,garanteRegisterEmail
import os, traceback
from blockchainRequest import *


app = Flask(__name__)

CORS(
    app,
    resources={
        #! Login
        "/login": {"origins": "*"},
        "/logout": {"origins": "*"},
        "/register": {"origins" : "*"},
        "/info" : {"origins" : "*"},
        "/info/changePassword" : {"origins" : "*"},
        "/info/changeProfilePicture" : {"origins" : "*"},
        "/budget" : {"origins": "*"},
        "/transaction" : {"origins" : "*"},
        "/transaction/*" : {"origins" : "*"},
        #? Servizi
        "/services" : {"origins" : "*"},
        "/services/*" : {"origins" : "*"},
        "/services/mine" : {"origins" : "*"},
        "/services/mine/*" : {"origins" : "*"},
        #! Requests
        "/services/mine/requests" : {"origins" : "*"},
        "/services/mine/requests/*" : {"origins" : "*"},
        "/requests/mine" : {"origins" : "*"},
        "/requests/mine/*" : {"origins" : "*"},
        #? Segnalazione
        "/report" : {"origins" : "*"},
        #! Products
        "/products/mine" : {"origins" : "*"},
        "/products/mine/*" : {"origins" : "*"},
        "/products" : {"origins" : "*"},
        #! Subs
        "/subs/mine" : {"origin" : "*"},
        "/subs/mine/*" : {"origins" : "*"},
        "/subs" : {"origins" : "*"},
        "/subs/*" : {"origins" : "*"},
        #? Orders
        "/orders" : {"origins" : "*"},
        "/orders/*" : {"origins" : "*"},
        "/orders/mine" : {"origins" : "*"},
        #!Feedback
        "/feedback" : {"origins" : "*"},
        #? Servizi Comunita
        "/services/community" : {"origins" : "*"},
        "/services/community/ets" : {"origins" : "*"},
        "/services/community/*" : {"origins" : "*"},
        "/needs" : {"origins": "*"},
        

        #! GARANTE
        "/garante/account/user" : {"originis" : "*"},
        "/garante/account/ets" : {"originis" : "*"},
        "/garante/account/impresa" : {"origins" : "*"},

        "/garante/approve/services" : {"originis" : "*"},
        "/garante/approve/needs" : {"originis" : "*"},
        "/garante/approve/products" : {"originis" : "*"},
        "/garante/approve/subs" : {"originis" : "*"},

        "/garante/report/services" : {"originis" : "*"},
        "/garante/report/orders" : {"originis" : "*"},

        "/garante/login" : {"originis" : "*"},
        "/garante/settings" : {"originis" : "*"},

    },
)

app.config["JWT_SECRET_KEY"] = os.urandom(24)
app.config["JWT_BLACKLIST_ENABLED"] = True
app.config["JWT_BLACKLIST_TOKEN_CHECKS"] = ["access"]
jwt = JWTManager(app)

blacklist = set()

@jwt.token_in_blocklist_loader
def check_if_token_in_blocklist(jwt_header, jwt_payload):
    jti = jwt_payload["jti"]
    return jti in blacklist

@app.before_first_request
def createServerFolder():
    try:
        os.makedirs(os.getcwd()+"/Server_File_Storage/needs",exist_ok=True)
        os.makedirs(os.getcwd()+"/Server_File_Storage/products",exist_ok=True)
        os.makedirs(os.getcwd()+"/Server_File_Storage/subs",exist_ok=True)
        os.makedirs(os.getcwd()+"/Server_File_Storage/proPic",exist_ok=True)  
        os.makedirs(os.getcwd()+"/Server_File_Storage/comunityService",exist_ok=True)  

    except Exception as e:
        print(e)

#region #!APP BASE

#region #! LOGIN - LOGOUT - REGISTER - INFO - SALDO - TRANSAZIONI

@app.route("/login", methods=["POST"])
def login():
    response=createResponse("POST")
    data = request.get_json()
    db = DB()

    if not checkData(data, validRequest["login"]):
        return response, 400
    
    try:
        if db.connetti():
            query = Query(db.getCursor())
            login = query.loginControl(data)
            if login == "1":
                result={"access_token" : create_access_token(identity=data["username"], expires_delta=False)}
                response.set_data(json.dumps(result))
                return response, 200
            else:
                response.set_data(json.dumps({"info":login}))
                return response, 401
        else:
            return response, 500
    except Exception as e:
        print(e)
        return response, 500

@app.route("/logout", methods=["DELETE"])
@jwt_required()
def logout():
    response = createResponse("DELETE")
    jti = get_jwt()["jti"]
    blacklist.add(jti)
    return response, 200

@app.route("/register", methods=["POST"])
def register():
    response = createResponse("POST")
    data = request.get_json()
    print(checkData(data,validRequest["addImpresa"]))
    db = DB()
    try:
        if not db.connetti(acommit=False):
            return response, 500
        query = Query(db.getCursor())
        result = False

        if data["_accountType"]=="impresa" and checkData(data, validRequest["addImpresa"]):
            result = query.addImpresa(data)

        elif data["_accountType"]=="utente" and checkData(data, validRequest["addUser"]):
            result = query.addUser(data)
        if result:
            if not ( saveFile("proPic/", result, request.get_json()["_foto"]) and registerEmail(data["_mail"],data["_accountType"], {"nome" : data["_nome"]}) ):
                return response, 500

            db.getConnection().commit()
            return response, 200
        else:
            response.set_data(json.dumps({"errore": result}))
            return response, 401
    except Exception as e:
        print(e)
        return response, 500

@app.route("/info", methods=["GET","PUT"])
@jwt_required()
def getInfo():
    response = createResponse("GET, PUT")
    db=DB()

    try:
        if not db.connetti():
            return response, 500
        query=Query(db.getCursor())
        tipo=query.getUserType(get_jwt_identity())
        data = False

        if request.method=="PUT":
            if not checkData(request.get_json(), validRequest["updateInfo"]):
                return response, 400 
            if tipo == "utente":
                data = query.updateInfoUtente(get_jwt_identity(),request.get_json())

        elif request.method=="GET":        
            if tipo == "utente":
                data = query.getInfoUtente(get_jwt_identity())

            elif tipo == "impresa":
                data = query.getInfoImpresa(get_jwt_identity())

            elif tipo == "ente":
                data = query.getInfoEnte(get_jwt_identity())

        if data != False:
            response.set_data(json.dumps(data))
            return response, 200

        return response, 400
    except Exception as e:
        print(e)
        return response, 500

@app.route("/info/changePassword", methods=["PUT"])
@jwt_required()
def updatePassword():
    response = createResponse("PUT")
    db=DB()

    try:
        if not db.connetti():
            return response, 500
        query=Query(db.getCursor())
        data = False
        if request.method=="PUT":
            if not checkData(request.get_json(), validRequest["updatePassword"]):
                return response, 400 

            data = query.changePasswordUtente(get_jwt_identity(),request.get_json())

        if data == 1:
            response.set_data(json.dumps(data))
            return response, 200

        elif data == -1:
            response.set_data(json.dumps(data))
            return response, 401

        return response, 400
    except Exception as e:
        print(e)
        return response, 500

@app.route("/info/changeProfilePicture", methods=["PUT"])
@jwt_required()
def updateProfilePicture():
    response = createResponse("PUT")
    db=DB()
    try:
        if not db.connetti():
            return response, 500
        query=Query(db.getCursor())

        if request.get_json()["foto"] is None:
            return response, 400

        if not saveFile("proPic/", query.getUserId(get_jwt_identity()) , request.get_json()["foto"]):
            return response, 500
        return response, 200
    except Exception as e:
        print(e)
        return response, 500


@app.route("/budget", methods=["GET"])
@jwt_required()
def getSaldo():
    response = createResponse("GET")
    db= DB()

    try:
        if db.connetti():
            query=Query(db.getCursor())
            data = query.getUserBudget(get_jwt_identity())

            if data != False:
                response.set_data(json.dumps({"_msg": data}))
                return response, 200

        return response, 500
    except Exception as e:
        print(e)
        return response, 500

@app.route("/transaction", methods=["GET"])
@jwt_required()
def getTransazioni():
    response = createResponse("GET")
    db= DB()

    if not checkData(request.args, validRequest["transaction"]):
        return response, 400

    try:
        if db.connetti():
            query=Query(db.getCursor())
            data = query.getTransactions(get_jwt_identity(),request.args.get("_page"), request.args.get("_psize"))

            if data != False:
                response.set_data(json.dumps({"_msg": data}))
                return response, 200

        return response, 500
    except Exception as e:
        print(e)
        return response, 500

@app.route("/transaction/<int:id>", methods=["GET"])
@jwt_required()
def getTransazione(id):
    response = createResponse("GET")
    db= DB()

    try:
        if db.connetti():
            query=Query(db.getCursor())
            data = query.getTransaction(id)
            if data != False:
                response.set_data(json.dumps({"_msg": data}))
                return response, 200

            return response, 404
        else:
            return response, 500
    except Exception as e:
        print(e)
        return response, 500

#endregion

#region #? SERVIZI
@app.route("/services/mine", methods=["GET", "POST"])
@jwt_required()
def myService():
    response = createResponse("GET, POST")
    db= DB()

    try:
        if not db.connetti():
            return response, 500
        query=Query(db.getCursor())
        username = get_jwt_identity()
        data = False

        if request.method == "GET":
            data = query.getMyService(username)

        elif request.method == "POST" and checkData(request.get_json(), validRequest["addService"]):
            data = query.addService(username, request.get_json())

        if data != False:
            response.set_data(json.dumps({"_msg": data}))
            return response, 200

        return response, 400
    except Exception as e:
        print(e)
        return response, 500

@app.route("/services/mine/<int:id>", methods=["DELETE"])
@jwt_required()
def myServiceDelete(id):
    response = createResponse("DELETE")
    db= DB()

    try:
        if db.connetti():
            query=Query(db.getCursor())
            data = query.deleteMyService(get_jwt_identity(), id)

            if data != False:
                response.set_data(json.dumps({"_msg": data}))
                return response, 200

            return response, 400
        else:
            return response, 500
    except Exception as e:
        print(e)
        return response, 500


@app.route("/services", methods=["GET"])
@jwt_required()
def services():
    response = createResponse("GET")
    db= DB()

    if not checkData(request.args, validRequest["getServices"]):
        return response, 400

    try:
        if not db.connetti():
            return response, 500
        query=Query(db.getCursor())
        data = False

        if request.args.get("filtro",False) == "false":
            data = query.getServices(get_jwt_identity(),request.args)

        else:
            data = query.getServicesFiltered(get_jwt_identity(),request.args)

        if data != False:
            response.set_data(json.dumps({"_msg": data}))
            return response, 200
        return response, 400
    except Exception as e:
        print(e)
        return response, 500


@app.route("/services/<int:id>", methods = ["GET" ,"POST"])
@jwt_required()
def servicesSpecific(id):
    response = createResponse("GET, POST")
    db= DB()
    try:

        if not db.connetti(False):
            return response, 500
        query=Query(db.getCursor())
        data = False
        if request.method == "GET":
            data = query.getServiceDetails(id)

        elif request.method == "POST" and checkData(request.get_json(), validRequest["newRequest"]):
            data = query.newRequest(get_jwt_identity() ,id, request.get_json())

        if data != False:
            db.getConnection().commit()
            response.set_data(json.dumps({"_msg": data}))
            return response, 200
        return response, 400
    except Exception as e:
        print(e)
        return response, 500

#endregion

#region #! Richieste
@app.route("/requests/mine", methods = ["GET"])
@jwt_required()
def myRequests():
    response = createResponse("GET")
    db= DB()

    try:
        if not db.connetti():
            return response, 500
        query=Query(db.getCursor())
        data = query.getMyRequests(get_jwt_identity())

        if data != False:
            response.set_data(json.dumps({"_msg": data}))
            return response, 200
        return response, 400

    except Exception as e:
        print(e)
        return response, 500

@app.route("/requests/mine/<int:id>", methods = ["DELETE", "PUT", "POST"])
@jwt_required()
def myRequestUpdate(id):
    response = createResponse("DELETE, PUT, POST")
    db= DB()

    try:
        if not db.connetti(False):
            return response, 500
        query=Query(db.getCursor())
        data = False
        if request.method == "DELETE":
            data = query.deleteMyRequest(get_jwt_identity(), id)

        if request.method == "PUT" and checkData(request.get_json(), validRequest["updateMyRequest"]):
            data = query.updateMyRequest(get_jwt_identity(), id, request.get_json().get("_stato"))

        if request.method == "POST" and checkData(request.get_json(), validRequest["confirmMyRequest"]):
            data = query.confirmRequest(get_jwt_identity(), id, request.get_json())

        if data != False:
            db.getConnection().commit()
            response.set_data(json.dumps({"_msg": data}))
            return response, 200
        return response, 400
    except Exception as e:
        print(e)
        return response, 500

@app.route("/services/mine/requests", methods = ["GET"])
@jwt_required()
def myServiceRequests():
    response = createResponse("GET")
    db= DB()

    try:
        if not db.connetti():
            return response, 500
        query=Query(db.getCursor())
        data = query.getMyServiceRequest(get_jwt_identity())

        if data != False:
            response.set_data(json.dumps({"_msg": data}))
            return response, 200
        return response, 400
    except Exception as e:
        print(e)
        return response, 500

#endregion

#region #? SEGNALAZIONI
@app.route("/report", methods = ["POST"])
@jwt_required()
def report():
    response = createResponse("POST")
    db= DB()

    try:
        data = request.get_json()

        if not checkData(data, validRequest["report"]):
            return response, 400

        if not db.connetti(False):
            return response, 500
        query = Query(db.getCursor())
        result = False 

        if data["_tipo"] == "servizio":
            result = query.newSegnalazioneServizio(get_jwt_identity(), data)

        elif data ["_tipo"] == "ordine":
            result = query.newSegnalazioneOrdine(get_jwt_identity(), data)

        if result != False:
            db.getConnection().commit()
            response.set_data(json.dumps({"_msg": data}))
            return response, 200
        return response, 400
    except Exception as e:
        print(e)
        return response, 500
#endregion

#region #! Abbonamenti
@app.route("/subs/mine",methods = ["GET", "POST"])
@jwt_required()
def mySubs():
    response = createResponse("GET, POST")
    db = DB()

    try:
        if not db.connetti(False):
            return response, 500
        query= Query(db.getCursor())
        username = get_jwt_identity()
        data = False

        if request.method == "GET":
            data = query.getMySubs(username)
            
        elif request.method == "POST" and checkData(request.get_json(), validRequest["addSubs"]):
            data = query.addSubs(username, request.get_json())

            if not saveFile("subs/", data, request.get_json()["foto"]):
                return response, 500

        if data != False:
            db.getConnection().commit()
            response.set_data(json.dumps({"_msg": data}))
            return response, 200
        return response, 400
    except Exception as e:
        print(e)
        return response, 500



@app.route("/subs/mine/<int:id>", methods=["DELETE"])
@jwt_required()
def mySubsSpecific(id):
    response = createResponse("DELETE")
    db = DB()

    try:
        if not db.connetti():
            return response, 500
        query=Query(db.getCursor())
        username = get_jwt_identity()
        data = False
        if request.method == "DELETE":
            data = query.deleteSubs(username, id)

        if data != False:
            response.set_data(json.dumps({"_msg": data}))
            return response, 200
        return response, 400
    except Exception as e:
        print(e)
        return response, 500

@app.route("/subs", methods=["GET"])
@jwt_required()
def subs():
    response = createResponse("GET")
    db= DB()

    try:
        if not db.connetti(False):
            return response, 500
        query = Query(db.getCursor())
        username = get_jwt_identity()
        data = False
        

        if request.method == "GET" and checkData(request.args, validRequest["getSubs"]):

            if request.args.get("filtro",False) == "false":
                data = query.getSubs(username, request.args)
            else:
                data = query.getSubsFiltered(get_jwt_identity(),request.args)

            
        print(type(data) is dict and data.get("status", None) == -1)
        if type(data) is dict and data.get("status", None) == -1:
            db.getConnection().rollback()
            response.set_data(json.dumps(data))
            return response,400

        if data != False:
            db.getConnection().commit()
            response.set_data(json.dumps({"_msg": data}))
            return response, 200

        db.getConnection().rollback()
        return response, 400
    except Exception as e:
        print(e)
        return response, 500


@app.route("/subs/<int:id>", methods = ["GET" ,"POST"])
@jwt_required()
def subsSpecific(id):
    response = createResponse("GET, POST")
    db= DB()
    try:

        if not db.connetti(False):
            return response, 500
        query=Query(db.getCursor())
        data = False
        if request.method == "GET":
            data = query.getSubsDetails(id)

        elif request.method == "POST" :
            data = query.buySubs(get_jwt_identity() ,id, request.get_json())

        if data != False:
            db.getConnection().commit()
            response.set_data(json.dumps({"_msg": data}))
            return response, 200
        return response, 400
    except Exception as e:
        print(e)
        return response, 500

#endregion




#region #! Beni
@app.route("/products/mine", methods=["GET", "POST"])
@jwt_required()
def myProdutcs():
    response = createResponse("GET, POST")
    db= DB()

    try:
        if not db.connetti(False):
            return response, 500
        query= Query(db.getCursor())
        username = get_jwt_identity()
        data = False

        if request.method == "GET":
            data = query.getMyProducts(username)
            
        elif request.method == "POST" and checkData(request.get_json(), validRequest["addProducts"]):
            data = query.addProducts(username, request.get_json())

            if not saveFile("products/", data, request.get_json()["foto"]):
                return response, 500

        if data != False:
            db.getConnection().commit()
            response.set_data(json.dumps({"_msg": data}))
            return response, 200
        return response, 400
    except Exception as e:
        print(e)
        return response, 500

@app.route("/products/mine/<int:id>", methods=["DELETE", "PUT"])
@jwt_required()
def myProductsSpecific(id):
    response = createResponse("DELETE, PUT")
    db= DB()

    try:
        if not db.connetti():
            return response, 500
        query=Query(db.getCursor())
        username = get_jwt_identity()
        data = False
        if request.method == "DELETE":
            data = query.deleteProducts(username, id)

        elif request.method == "PUT" and checkData(request.get_json(), validRequest["addProductQuantity"]):
            data = query.addProductQuantity(username, id, request.get_json().get("quantita"))

        if data != False:
            response.set_data(json.dumps({"_msg": data}))
            return response, 200
        return response, 400
    except Exception as e:
        print(e)
        return response, 500


@app.route("/products", methods= ["GET","POST"])
@jwt_required()
def products():
    response = createResponse("GET, POST")
    db= DB()

    try:
        if not db.connetti(False):
            return response, 500
        query = Query(db.getCursor())
        username = get_jwt_identity()
        data = False
        

        if request.method == "GET" and checkData(request.args, validRequest["getProducts"]):

            if request.args.get("filtro",False) == "false":
                data = query.getProducts(username, request.args)
            else:
                data = query.getProductsFiltered(get_jwt_identity(),request.args)

        elif request.method == "POST": #!! NON CI SONO CONTROLLI SUI DATI INVIATI!!!
            
            data = query.buyProducts(get_jwt_identity(), request.get_json())

        print(type(data) is dict and data.get("status", None) == -1)
        if type(data) is dict and data.get("status", None) == -1:
            db.getConnection().rollback()
            response.set_data(json.dumps(data))
            return response,400

        if data != False:
            db.getConnection().commit()
            response.set_data(json.dumps({"_msg": data}))
            return response, 200

        db.getConnection().rollback()
        return response, 400
    except Exception as e:
        print(e)
        return response, 500
#endregion

#region #? Orders
@app.route("/orders", methods=["GET"])
@jwt_required()
def orders():
    response = createResponse("GET")
    db= DB()

    try:
        if not db.connetti():
            return response, 500
        query=Query(db.getCursor())
        data = query.getOrders(get_jwt_identity())
        if data != False:
            response.set_data(json.dumps({"_msg": data}))
            return response, 200
        return response, 400
    except Exception as e:
        print(e)
        return response, 500

@app.route("/orders/<int:id>", methods=["PUT"])
@jwt_required()
def orderUpdate(id):
    response = createResponse("PUT")
    db= DB()

    try:
        if db.connetti():
            query=Query(db.getCursor())
            data = query.checkOrder(get_jwt_identity(), id)
            if data != False:
                response.set_data(json.dumps({"_msg": data}))
                return response, 200
            return response, 404
        else:
            return response, 500
    except Exception as e:
        print(e)
        return response, 500

@app.route("/orders/mine", methods=["GET"])
@jwt_required()
def myOrders():
    response = createResponse("GET")
    db= DB()

    if not checkData(request.args, validRequest["getMyOrders"]):
        return response, 400

    try:
        if db.connetti():
            query=Query(db.getCursor())
            data = query.getMyOrders(get_jwt_identity(), request.args)

            response.set_data(json.dumps({"_msg": data}))
            return response, 200
        else:
            return response, 500
    except Exception as e:
        print(e)
        return response, 500

@app.route("/orders/mine/<int:id>", methods=["PUT"])
@jwt_required()
def myOrderUpdate(id):
    response = createResponse("PUT")
    db= DB()

    if not checkData(request.get_json(), validRequest["confirmOrder"]):
        return response, 400

    try:    
        if db.connetti(False):
            query=Query(db.getCursor())
            data = query.confirmOrder(get_jwt_identity(), id, request.get_json())

            if data != False:
                db.getConnection().commit()
                response.set_data(json.dumps({"_msg": data}))
                return response, 200

            db.getConnection().rollback()
            return response, 400
        else:
            return response, 500
    except Exception as e:
        print(e)
        return response, 500
#endregion 

#region #! Feedback
@app.route("/feedback", methods=["GET"])
@jwt_required()
def feedback():
    response = createResponse("GET")
    db= DB()

    try:
        if not db.connetti():
            return response, 500
        query=Query(db.getCursor())
        data = False

        if not checkData(request.args, validRequest["feedback"]):
            return response, 400

        if request.args.get("tipo") == "utente":
            data = query.feedbackUser(request.args)

        elif request.args.get("tipo") == "impresa":
            data = query.feedbackCompany(request.args)

        if data != False:
            response.set_data(json.dumps(data))
            return response, 200
        return response, 400
    except Exception as e:
        print(traceback.format_exc())
        return response, 500

#endregion

#region #? Servizi Comunita

@app.route("/services/community/ets", methods = ["GET"])
@jwt_required()
def getEts():
    response = createResponse("GET")
    db= DB()

    try:
        if db.connetti():
            query=Query(db.getCursor())
            data = query.getEts()
            response.set_data(json.dumps({"_msg": data}))
            return response, 200
        else:
            return response, 500
    except Exception as e:
        print(e)
        return response, 500



@app.route("/services/community", methods = ["POST", "GET"])
@jwt_required()
def communityServices():
    response = createResponse("POST, GET")
    db = DB()

    try:
        if not db.connetti(False):
            return response, 500
        query= Query(db.getCursor())
        data= False

        if request.method == "GET":
            data = query.getServiceCommunity(get_jwt_identity(),request.args)

        if request.method == "POST" and checkData(request.get_json(), validRequest["postServiceComunity"]):
            data = query.addServiceCommunity(get_jwt_identity(), request.get_json())
            if not saveFile("comunityService/", data, request.get_json()["foto"]):
                return response, 500

        if data != False:
            db.getConnection().commit()
            response.set_data(json.dumps({"_msg":data}))
            return response, 200
        return response, 400
    except Exception as e:
        print(e)
        return response, 500  

@app.route("/services/community/<int:id>", methods = ["PUT", "DELETE"])
@jwt_required()
def updateCommunityServices(id):
    response = createResponse("PUT, DELETE")
    db = DB()
    print(id)
    try:
        if not db.connetti():
            return response, 500
        query= Query(db.getCursor())
        data= False

        if request.method == "PUT":
            data = query.confirmServiceCommunity(get_jwt_identity(),id)

        if request.method == "DELETE":
            data = query.refuseServiceCommunity(get_jwt_identity(), id)

        if data != False:
            response.set_data(json.dumps({"_msg":data}))
            return response, 200
        return response, 400
    except Exception as e:
        print(e)
        return response, 500 

@app.route("/needs", methods=["POST", "GET"])
@jwt_required()
def needs():
    response = createResponse("POST, GET")
    db= DB()
    try:
        if not db.connetti(acommit=False):
            return response, 500
        query= Query(db.getCursor())
        data = False

        if request.method == "GET" and checkData(request.args, validRequest["getNeeds"]):
            if(request.args.get("_all") == "True"):
                data = query.getAllNeeds()
            else:
                data = query.getNeeds(request.args)  

        elif request.method == "POST" and checkData(request.get_json(), validRequest["postNeeds"]): 
            data = query.addBisogno(get_jwt_identity(),request.get_json())

            if not saveFile("needs/", data, request.get_json()["allegati"]):
                return response, 500

        if data != False:
            db.getConnection().commit()
            response.set_data(json.dumps({"_msg":data}))
            return response, 200
        return response, 400
    except Exception as e:
        print(e)
        return response, 500   
        

#endregion 

#endregion 


#region #! GARANTE


@app.route("/garante/login", methods=["POST"])
def garanteLogin():
    response=createResponse("POST")
    data = request.get_json()
    db = DB()

    try:
        if db.connetti():
            query = Query(db.getCursor())
            if query.logAdmin(data):
                result={"access_token" : create_access_token(identity=data["login"], expires_delta=False)}
                response.set_data(json.dumps(result))
                return response, 200
            else:
                return response, 401
        else:
            return response, 500
    except Exception as e:
        print(e)
        return response, 500

@app.route("/garante/settings", methods=["GET","PUT"])
@jwt_required()
def garanteSettings():
    response = createResponse("GET, PUT")
    db=DB()

    try:
        if not db.connetti():
            return response, 500
        query=Query(db.getCursor())
        data = False

        if not query.isAdmin("id"):
            return response, 401

        if request.method=="PUT":
            if request.get_json()["options"]=="andron":
                data = query.setAndronHour(request.get_json())#AndronCall.setting_update(Settings.ANDRON,request.get_json()["andron"])

            if request.get_json()["options"]=="percentuale":
                data = query.setPercentualeETS(request.get_json())#AndronCall.setting_update(Settings.REWARD,request.get_json()["percentuale"])

        elif request.method=="GET":        
            data = query.getSettings()#AndronCall.getAll_asset(Assets.SETTINGS).get("message",False)
            data=json.loads(data) #!! Rimuovere Blockchain
            data = [{"Record":{   #!! Rimuovere Blockchain
                "andronGeneration" : data.get("andron"),
                "rewardEts" : data.get("percentuale")
            }}]
        if data != False:
            response.set_data(json.dumps(data))
            return response, 200

        return response, 400
    except Exception as e:
        print(e)
        return response, 500

#region #!account

@app.route("/garante/account/user", methods=["GET","PUT","DELETE"])
@jwt_required()
def accountManagementUser():
    response = createResponse("GET, PUT, DELETE")
    db=DB()

    try:
        if not db.connetti(False):
            return response, 500
        query=Query(db.getCursor())
        data = False

        if not query.isAdmin("id"):
            return response, 401

        if request.method == "DELETE":
            data = query.refuseAccount(request.args["id"])

        elif request.method == "GET":
            data = query.userToActivate()

        elif request.method == "PUT":
            data = query.activateAccount(request.args["id"])
            nome = data.get("nome", False)
            cognome = data.get("cognome", False)

            if (not nome and not cognome):
                return response, 400
        if data != False:
            response.set_data(json.dumps(data))
            db.getConnection().commit()
            return response, 200

        return response, 400
    except Exception as e:
        print(e)
        return response, 500

@app.route("/garante/account/ets", methods=["POST"])
@jwt_required()
def accountManagementEts():
    response = createResponse("POST")
    db=DB()

    try:
        if not db.connetti(False):
            return response, 500
        query=Query(db.getCursor())
        data = False

        if not query.isAdmin("id"):
            return response, 401

        dati =request.get_json()

        if dati["_accountType"]=="ente" and checkData(dati, validRequest["addEnte"]):
            data = query.addEnte(dati)
        if data != False:
            nome = dati.get("_username", False)
            cognome = dati.get("_nome", False)
            if (not nome and not cognome):
                return response, 400
            #if not AndronCall.createUser(data,AccountType.ETS,nome,cognome):
            #    raise Exception()
            if not garanteRegisterEmail(dati["_email"],"ente",{ "nome": dati["_nome"], "password": dati["_password"] }):
                return response, 500
            db.getConnection().commit()
            response.set_data(json.dumps(data))
            return response, 200

        return response, 400
    except Exception as e:
        print(e)
        return response, 500

@app.route("/garante/account/impresa", methods=["GET","PUT","DELETE","POST"])
@jwt_required()
def accountManagementImpresa():
    response = createResponse("GET, PUT, DELETE, POST")
    db=DB()

    try:
        if not db.connetti(False):
            return response, 500
        query=Query(db.getCursor())
        data = False

        if not query.isAdmin("id"):
            return response, 401

        if request.method=="PUT":
            data = query.activateImpresa(request.args["id"])
            identificativo = data
            nome = data.get("username", False)
            cognome = data.get("nome", False)
            if (not nome and not cognome):
                return response, 400

        elif request.method=="DELETE":
            data = query.refuseImpresa(request.args["id"])

        elif request.method=="GET":        
            data = query.impresaToActivate()

        elif request.method=="POST":
            dati = request.get_json()
            if dati["_accountType"]=="impresa" and checkData(dati, validRequest["addImpresa"]):
                data = query.addImpresa(dati,1)
                identificativo = data
                nome = dati["_username"]
                cognome = dati["_nome"]
            if not data:
                response.set_data(json.dumps({"errore": data}))
                return response, 401 
            if not garanteRegisterEmail(dati["_mail"],"impresa",{ "nome": dati["_nome"], "password": dati["_password"] }):
                return response, 500

        #if (request.method=="POST" or request.method=="PUT") and data!= False:
        #    if not AndronCall.createUser(identificativo,AccountType.IMPRESA,nome,cognome):
        #        raise Exception()

        if data != False:
            response.set_data(json.dumps(data))
            db.getConnection().commit()
            return response, 200

        return response, 400
    except Exception as e:
        print(e)
        return response, 500

#endregion

#region #!Approve
@app.route("/garante/approve/services", methods=["GET","PUT", "DELETE"])
@jwt_required()
def approveServices():
    response = createResponse("GET, PUT, DELETE")
    db=DB()

    try:
        if not db.connetti():
            return response, 500
        query=Query(db.getCursor())
        data = False

        if not query.isAdmin("id"):
            return response, 401

        if request.method == "DELETE":
            data = query.refuseService(request.args["id"])
        elif request.method == "GET":
            data = query.servicesToactivate()

        elif request.method == "PUT":
            data = query.activateService(request.args["id"])
        if data != False:
            response.set_data(json.dumps(data))
            return response, 200

        return response, 400
    except Exception as e:
        print(e)
        return response, 500

@app.route("/garante/approve/needs", methods=["GET","PUT", "DELETE"])
@jwt_required()
def approveNeeds():
    response = createResponse("GET, PUT, DELETE")
    db=DB()

    try:
        if not db.connetti():
            return response, 500
        query=Query(db.getCursor())
        data = False

        if not query.isAdmin("id"):
            return response, 401


        if request.method == "DELETE":
            data = query.refuseNeed(request.args["id"])
        elif request.method == "GET":
            data = query.needsToactivate()

        elif request.method == "PUT":
            data = query.activateNeed(request.args["id"])
        if data != False:
            response.set_data(json.dumps(data))
            return response, 200

        return response, 400
    except Exception as e:
        print(e)
        return response, 500

@app.route("/garante/approve/products", methods=["GET","PUT", "DELETE"])
@jwt_required()
def approveProducts():
    response = createResponse("GET, PUT, DELETE")
    db=DB()

    try:
        if not db.connetti():
            return response, 500
        query=Query(db.getCursor())

        if not query.isAdmin("id"):
            return response, 401
        data = False

        if request.method == "DELETE":
            data = query.refuseProduct(request.args["id"]) 

        elif request.method == "GET":
            data = query.productsToactivate()

        elif request.method == "PUT":
            data = query.activateProduct(request.args["id"])

        if data != False:
            response.set_data(json.dumps(data))
            return response, 200

        return response, 400
    except Exception as e:
        print(e)
        return response, 500


@app.route("/garante/approve/subs", methods=["GET","PUT", "DELETE"])
@jwt_required()
def approveSubs():
    response = createResponse("GET, PUT, DELETE")
    db=DB()

    try:
        if not db.connetti():
            return response, 500
        query=Query(db.getCursor())

        if not query.isAdmin("id"):
            return response, 401
        data = False

        if request.method == "DELETE":
            data = query.refuseSubscription(request.args["id"]) 

        elif request.method == "GET":
            data = query.subsToactivate()

        elif request.method == "PUT":
            data = query.activateSubscription(request.args["id"])

        if data != False:
            response.set_data(json.dumps(data))
            return response, 200

        return response, 400
    except Exception as e:
        print(e)
        return response, 500

#endregion

#region #!Reports
@app.route("/garante/report/services", methods=["GET","PUT"])
@jwt_required()
def managementServicesReport():
    response = createResponse("GET, PUT")
    db=DB()

    try:
        if not db.connetti(False):
            return response, 500
        query=Query(db.getCursor())
        data = False

        if not query.isAdmin("id"):
            return response, 401

        if request.method=="PUT":
            dati = request.get_json()
            if dati["operazione"]=="concludi":
                data = query.concludiSegnalazioneServizio(dati["idRichiesta"],dati["idEsponente"])
            if dati["operazione"]=="rimborso":
                data = query.rimborsaSegnalazioneServizio(dati["idRichiesta"],dati["idRichiedente"])

        elif request.method=="GET":        
            data = query.getReportUsers()

        if data != False:
            db.getConnection().commit()
            response.set_data(json.dumps(data))
            return response, 200

        return response, 400
    except Exception as e:
        print(e)
        return response, 500

@app.route("/garante/report/orders", methods=["GET","PUT"])
@jwt_required()
def managementOrdersReport():
    response = createResponse("GET, PUT")
    db=DB()

    try:
        if not db.connetti():
            return response, 500
        query=Query(db.getCursor())
        data = False

        if not query.isAdmin("id"):
            return response, 401

        if request.method=="PUT":
            dati = request.get_json()
            if dati["operazione"]=="concludi":
                data = query.concludiSegnalazioneOrdine(dati["idOrdine"],dati["idSegnalazione"])
            if dati["operazione"]=="rimborso":
                data = query.rimborsaSegnalazioneOrdine(dati["idSegnalatore"],dati["idImpresa"],dati["idOrdine"],dati["idSegnalazione"],dati["idTransazione"])

        elif request.method=="GET":        
            data = query.getReportOrders()

        if data != False:
            response.set_data(json.dumps(data))
            return response, 200

        return response, 400
    except Exception as e:
        print(e)
        return response, 500

#endregion

#endregion



if __name__ == "__main__":
    app.run(host="localhost", port=5001, debug=True)
