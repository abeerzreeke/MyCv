import flask
from flask import render_template

app = flask.Flask(__name__, static_url_path='static')


@app.route('/home', methods=['GET', 'POST'])
def main():
    return render_template('main.html')


@app.route('/reg', methods=['GET', 'POST'])
def regis():
    return render_template('regist.html')
