# codecept
poc1
. CodeceptJS has been a framework of choice for our team when it comes to E2E testing for Angular projects.
.based on Angular CLI version 1.7.3, Angular framework version 5.2.9, and CodeceptJS version ^1.1.0.
.$yarn install
.$ npm install --save-dev codeceptjs
.Then create a npm script in package.json and use npm run codeceptjscommand.
.Create a config file for CodeceptJS with protractor helpers
.Writing the first test => happy path
.Running the tests

To run the test, first, we need to have a Selenium server and a browser driver manager running. We can use webdriver-manager binary which comes in
$yarn webdriver-manager update }=>Then run $ npm run wd:start
$yarn webdriver-manager start

if we see the message “Selenium Server is up and running” then it is all good.

Open another terminal window and run $ yarn codeceptjs 



