from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/hello", methods=["POST"])
def hello():
    data = request.json
    greet = data.get('greet')
    return jsonify("hello")

if __name__=='__main__':
    app.run(host='localhost', port=5000) 