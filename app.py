from flask import Flask, request
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

app = Flask(__name__)

@app.route('/contact', methods=['POST'])
def contact():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    send_email(name, email, message)

    return {"message": "Email sent successfully"}, 200

def send_email(name, email, message):
    # Set up your own SMTP server here
    smtp_server = "smtp.outlook.com"
    smtp_port = 587 # Change this if your SMTP server uses a different port
    username = "jared.thompkins@outlook.com"  # Your email address
    password = os.environ.get('EMAIL_PASSWORD')

    msg = MIMEMultipart()
    msg['From'] = username
    msg['To'] = "jared.thompkins@outlook.com"
    msg['Subject'] = "New message from " + name

    body = f"New contact form submission:\n\nFrom: {name}\nEmail: {email}\n\n{message}"
    msg.attach(MIMEText(body, 'plain'))

    server = smtplib.SMTP(smtp_server, smtp_port)
    server.starttls()
    server.login(username, password)
    server.send_message(msg)
    server.quit()

if __name__ == '__main__':
    app.run(debug=True)
