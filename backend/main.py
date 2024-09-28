from flask import Flask, jsonify, request
from flask_cors import CORS
from pathlib import Path
import sqlite3

app = Flask(__name__)
CORS(app)

@app.route("/hello", methods=["POST"])
def hello():
    data = request.json
    greet = data.get('greet')
    return jsonify("hello")


@app.route("/validateAdressInDb", methods=["POST"])
def validate_address_in_db():
    data = request.json
    url = data.get("url")
    conn = sqlite3.connect(Path(__file__).parent.joinpath("urls_db"))
    curr = conn.cursor()
    result = curr.execute(
        "SELECT COUNT(*) FROM urls_table WHERE url = ?", (url,)
    ).fetchall()
    conn.close()
    return result

def is_site_blacklisted(url_to_check):
    # TODO: get it from DB
    blacklisted_sites = ['https://allegro.pl/']
    return url_to_check.lower() in [site.lower() for site in blacklisted_sites]

@app.route('/check_site', methods=['POST'])
def check_site():
    data = request.get_json()
    url_to_check = data.get('url')
    if not url_to_check:
        return jsonify({'error': 'No URL provided'})

    is_listed = is_site_blacklisted(url_to_check)
    return jsonify({'url': url_to_check, 'is_listed': is_listed})

if __name__=='__main__':
    app.run(host='localhost', port=5000)