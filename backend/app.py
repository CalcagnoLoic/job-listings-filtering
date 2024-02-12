from flask import Flask, jsonify
from api.jobList import jobList

app = Flask(__name__)


@app.route("/")
def get_jobs():
    return jsonify(jobList)


if __name__ == "__main__":
    app.run(debug=True)
