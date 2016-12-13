var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);

client
    .init()
    .url('https://emilioward.github.io/ONS-Jumanji/startSurvey.html')



    })
    .end();
