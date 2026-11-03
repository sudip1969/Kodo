from flask import Flask, jsonify, render_template
from flask_cors import CORS
from asgiref.sync import async_to_sync
from kodo import run_all_checks
import os

app = Flask(__name__)

CORS(app, resources={r"/api/*": {"origins": "https://kodo-eight-tan.vercel.app"}})

@app.route("/")
def index():
    return "Die"

@app.route("/api/status", methods=["GET"])
def get_status():
    results = async_to_sync(run_all_checks)()
    return jsonify({
        "status": "success",
        "data": results
    })

if __name__ == "__main__":
    app.run(debug=True, port=5000)