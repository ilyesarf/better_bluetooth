from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/send")
def send():
    return render_template('send.html')

@app.route("/receive")
def receive():
    return render_template('receive.html')

if __name__ == '__main__':
    app.run(host = "0.0.0.0", port="1337", debug=True)
