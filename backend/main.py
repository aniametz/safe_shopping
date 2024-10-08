import sqlite3

from pathlib import Path
from collections import OrderedDict


from flask import Flask, jsonify, request
from flask_cors import CORS

from backend.markers.code_quality import code_quality
from backend.markers.default_shop_currency import default_shop_currency
from backend.markers.language_consistency import language_consistency
from backend.markers.mobile_devices_support import mobile_devices_support
from backend.markers.multiple_redirections import multiple_redirections
from backend.markers.payment_page import payment_page
from backend.markers.prices_benchmark import prices_benchmark
from backend.markers.registration_date import registration_date
from backend.markers.regulatory_compliance import regulatory_compliance
from backend.markers.site_available_in_engine_results import site_available_in_engine_results
from backend.markers.ssl_certificate import ssl_certificate
from backend.markers.store_contact_details import store_contact_details
from backend.markers.store_social_media_available import store_social_media_available
from backend.markers.terms_and_conditions_available import terms_and_conditions_available
from backend.markers.webite_design_quality import website_design_quality
from backend.utils.mappings import marker_enum

app = Flask(__name__)
CORS(app)

@app.route("/hello", methods=["POST"])
def hello():
    data = request.json
    greet = data.get('greet')
    return jsonify("hello")

@app.route("/calculateSiteMarkers", methods=["POST"])
def calculate_site_markers():
    results = OrderedDict()

    data = request.json
    url = data.get("url")
    markers = [
        ssl_certificate,
        default_shop_currency,
        payment_page,
        registration_date,
        prices_benchmark,
        store_contact_details,
        terms_and_conditions_available,
        website_design_quality,
        mobile_devices_support,
        site_available_in_engine_results,
        store_social_media_available,
        language_consistency,
        regulatory_compliance,
        multiple_redirections,
        code_quality
    ]

    # Check url vs each marker
    for marker_func in markers:
        func_name = marker_enum[marker_func]
        try:
            results[func_name] = marker_func(url)
        except Exception as e:
            results[func_name] = False
    ordered_results = dict(results)
    return jsonify(ordered_results)


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
    blacklisted_sites = ['https://www.bycicle.net/pl/', 'https://www.butyjonakparis.com/']
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