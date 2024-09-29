from enum import Enum

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

marker_enum = {
    ssl_certificate: "SSL certificate is valid",
    registration_date: "Domain registration date is too recent",
    default_shop_currency: "Prices currency is region-appropriate ",
    payment_page: "Suspicious payment page",
    store_contact_details: "Store contact details available",
    prices_benchmark: "Prices are reasonable",
    terms_and_conditions_available: "Terms & conditions available on website",
    website_design_quality: "Store design is modern",
    mobile_devices_support: "Site is optimized for mobile devices",
    site_available_in_engine_results: "Site appears in search engine results",
    store_social_media_available: "Store social media available",
    language_consistency: "Text does not appear awkward or machine-learning translated",
    regulatory_compliance: "Company registration number or VAT number available",
    multiple_redirections: "No redirections through several domains",
    code_quality: "HTML tags are not deprecated",
}