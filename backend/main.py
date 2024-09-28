from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

@app.route("/hello", methods=["POST"])
def hello():
    data = request.json
    greet = data.get('greet')
    return jsonify("hello")


app.route("/validateAdressInDb", methods=["POST"])
def validate_address_in_db():
    data = request.json
    url = data.get("url")
    conn = sqlite3.connect()
    curr = conn.cursor()
    result = curr.execute(
        "SELECT COUNT(*) FROM urls WHERE url = ?", (url,)
    )
    conn.close()
    return result

if __name__=='__main__':
    app.run(host='localhost', port=5000) 