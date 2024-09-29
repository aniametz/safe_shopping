from enum import Enum

from backend.markers.default_shop_currency import default_shop_currency
from backend.markers.payment_page import payment_page
from backend.markers.prices_benchmark import prices_benchmark
from backend.markers.registration_date import registration_date
from backend.markers.ssl_certificate import ssl_certificate
from backend.markers.store_contact_details import store_contact_details

marker_enum = {
    ssl_certificate: "SSL certificate validity",
    registration_date: "Recent domain registration date",
    default_shop_currency: "Prices currency",
    payment_page: "Suspicious payment page",
    store_contact_details: "Store contact details available",
    prices_benchmark: "Prices are reasonable"
}