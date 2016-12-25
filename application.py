from flask import render_template, Flask, url_for, request
from pusher import Pusher
import json
import settings

pusher = Pusher(app_id=settings.PUSHER_APP_ID, key=settings.PUSHER_KEY, secret=settings.PUSHER_SECRET)


app = Flask(__name__)


@app.route('/viz')
def home():
    return render_template('viz.html')

@app.route('/')
def data():
    return render_template('home.html')


@app.route("/pusher/auth", methods=['POST'])
def pusher_authentication():

    auth = pusher.authenticate(
    channel=request.form['channel_name'],
        socket_id=request.form['socket_id']
    )

    return json.dumps(auth)