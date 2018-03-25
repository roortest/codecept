//const scenario = "End-to-end happy path Scenario";

//const executorsContent = require(â€˜app/resources/en/translation/executors/otherexecutors.jsonâ€™);
//const TestConfigurator = new (require('test/end-to-end/helpers/TestConfigurator'))(scenario);



Feature('Judicial UI E2E Tests');


Scenario("Test Homepage & Signin", function*(I) {

    I.amOnPage("/");
    browser.ignoreSynchronization = true;
    browser.waitForAngular();
    browser.sleep(500);
    I.wait(30);
    I.fillField("#username", "nybgul@gmail.com");
    I.fillField("#password", 'Monday01');
    I.click('Sign in');
    I.wait(30);
    I.seeElement('h1');


});