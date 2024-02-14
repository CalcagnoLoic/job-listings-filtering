from flask import Flask, jsonify
from api.jobList import jobList
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config["CORS_HEADERS"] = "Content-Type"

cors = CORS(app, resources={r"/": {"origins": "http://127.0.0.1:5000/"}})


@app.route("/")
@cross_origin(origin="localhost", headers=['Content-Type','Authorization'])
def get_jobs():
    response = jsonify(jobList)
    return response


if __name__ == "__main__":
    app.run(debug=True)
