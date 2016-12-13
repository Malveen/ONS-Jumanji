var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);
var fs = require("fs");
var contents = fs.readFileSync('/Users/warde/webdriverio-test/automatedtest/Data/logindata.json');
var jsonData = JSON.parse(contents);
var attempts = 0;
client
    .init()
    .url('https://emilioward.github.io/ONS-Jumanji/') //TODO: externalise the URL
    .setValue('#form-input-0', jsonData.username)
    .setValue('#form-input-1', jsonData.password)
    .click('#moveStart')
    .click('#startSurvey')//TODO: Check if this id is unique and that belongs to a button not link
    //Open the new tab for the EQ environment & pass information to EQ (e.g survey ID, live date, transaction ID...) make this a post request
    //That tab should have a start survey button & when button is clicked goto existing EQ test case
    .getUrl().then(function(url) {
        console.log('Test initiated for: ' + url);
        // outputs:

    })
    .end();
