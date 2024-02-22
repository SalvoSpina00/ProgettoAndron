from string import Template
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import smtplib, ssl

sender="devmail417@gmail.com"
password="aPWaCBqhuy2bZwT"
host = 'smtp.gmail.com'
port = 587

def read_template(filename):
    with open(filename, 'r', encoding='utf-8') as template_file:
        template_file_content = template_file.read()
    return Template(template_file_content)

def sendEmail(receiver,message):
    context = ssl.create_default_context()
    try:
        s = smtplib.SMTP(host=host, port=port)
        s.starttls(context=context)
        s.login(sender,password)
        
        msg = MIMEMultipart()

        msg['FROM']=sender
        msg['TO']=receiver
        msg['Subject']="Benvenuto in Andron!"

        msg.attach(message)

        s.send_message(msg)

        return True
    except Exception as e:
        print(e)
        return False


def registerEmail(receiver,user,data):
    try: 
        if user=="utente":
            message=MIMEText(read_template('TemplateEmail/userRegister').substitute(data),'plain')
        elif user=="impresa":
            message=MIMEText(read_template('TemplateEmail/impresaSelfRegister').substitute(data),'plain')
        
        sendEmail(receiver,message)
        return True
    except Exception:
        return False

def garanteRegisterEmail(receiver,user,data):
    try: 
        if user=="impresa":
            message=MIMEText(read_template('TemplateEmail/impresaGaranteRegister').substitute(data),'plain')

        elif user=="ente":        
            message=MIMEText(read_template('TemplateEmail/enteGaranteRegister').substitute(data),'plain')

        sendEmail(receiver,message)
        return True
    except Exception:
        return True #!! False

"""
if __name__=="__main__":
    receiver = "anto_pip23@hotmail.it"
    data = {
        "nome" : "Antonio",
        "password" : "password1"
    }
    t=Thread(target= registerEmail, kwargs=({'receiver':receiver, 'user':"utente", 'data': data}))
    t.start()
"""