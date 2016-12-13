Readme for Node.js and Selenium server setup

Prerequisite:

Please ensure that you have Node.js and Java installed onto your PC or Mac

Quick links:

https://nodejs.org/en/ - Node JS website installation

These URL's will help setup the testing environment

http://webdriver.io/guide.html - Setup the selenium surver and create a basic Test
https://www.youtube.com/watch?v=vPes7NKeYno - A basic 5 min tutorial taking you through the same process

---------------------------------------------------------------------------------------------------------

1. Create a simple test folder

    mkdir webdriverio-test && cd webdriverio-test
    Then let’s download the latest selenium standalone server version:

2. Download latest selenium standalone server

  curl -O http://selenium-release.storage.googleapis.com/3.0/selenium-server-standalone-3.0.1.jar
  Start the server by executing the following:

3. Start selenium standalone server

  java -jar selenium-server-standalone-3.0.1.jar
  Keep this running in the background and open a new terminal window. Next step is to download WebdriverIO via NPM:

4. Download WebdriverIO

  npm install webdriverio

5. Create a test file (test.js) with the following content

    var webdriverio = require('webdriverio');
    var options = {
        desiredCapabilities: {
            browserName: 'firefox'
        }
    };
    webdriverio
        .remote(options)
        .init()
        .url('http://www.google.com')
        .getTitle().then(function(title) {
            console.log('Title was: ' + title);
        })
        .end();

6. Run your test file

    node test.js

    this should output the following:
    Title was: Google
