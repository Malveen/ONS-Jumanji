from flask import render_template, jsonify, request
from app import app
from .forms import Survey
records=[]

@app.route('/')
@app.route('/index')
def index():
    form = Survey()
    return render_template('index.html', form=form)

@app.route('/submit', methods=['GET','POST'])
def submit():

    form = Survey()
    userID = form.userID.data
    periodID = form.periodID.data

    record = {
        'userID': userID,
        'periodID': periodID
        }
    records.append(record)
    return jsonify(record), 200
