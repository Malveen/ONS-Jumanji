from flask_wtf import Form
from wtforms import TextField

class Survey(Form):
    userID = TextField('userID')
    periodID = TextField('periodID')
