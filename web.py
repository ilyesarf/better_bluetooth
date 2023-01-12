from flask import Flask, render_template, request, redirect, make_response
import utils
import os

app = Flask(__name__)
upload_dir = f"{os.getenv('HOME')}/Desktop"

@app.route("/", methods=["GET", "POST"])
def home():
    error = None
    
    if request.method == "POST":
        try:
            book = request.files['book']
            book_title = request.form['book_title']

            utils.upload_file(upload_dir, book, book_title)

        except utils.EXTENSION_NOT_ALLOWED:
            error = "File extension is not allowed"
    
    return render_template("index.html", error=error)

if __name__ == '__main__':
    app.run(host = "0.0.0.0", port="1337", debug=True)
