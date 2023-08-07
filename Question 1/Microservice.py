import requests
from flask import Flask, request, jsonify
import json

app = Flask(__name__)

def fetch_numbers_from_url(url):
    try:
        response = requests.get(url, timeout=0.5)
        if response.status_code == 200:
            data = response.json()
            numbers = data.get("numbers", [])
            return numbers
    except requests.exceptions.Timeout:
        pass  # Ignore URLs that take too long to respond or timeout
    except Exception as e:
        print(f"Error fetching data from {url}: {e}")
    return []

@app.route("/numbers", methods=["GET"])
def get_numbers():
    urls = request.args.getlist("url")
    unique_numbers = set()

    for url in urls:
        numbers = fetch_numbers_from_url(url)
        unique_numbers.update(numbers)

    sorted_numbers = sorted(unique_numbers)

    return jsonify({"numbers": sorted_numbers})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8008)
