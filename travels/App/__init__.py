import flask
from flask import render_template_string
from flask import render_template, request

app = flask.Flask(__name__, static_url_path='App/static')


@app.route('/home', methods=['GET', 'POST'])
def main():
    return render_template('main.html')


@app.route('/reg', methods=['GET', 'POST'])
def regis():
    return render_template('regist.html')


if __name__ == "__main__":
    app.run(debug=True, port=5555)
