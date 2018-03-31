
Feature('login functionality');


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


Scenario("Invalid Signin", function*(I) {

    I.amOnPage("/");
    browser.ignoreSynchronization = true;
    browser.waitForAngular();
    browser.sleep(500);
    I.wait(30);
    I.fillField("#username", "testccd@gmail.com");
    I.fillField("#password", 'Monda567');
    I.click('Sign in');
    I.wait(30);
    I.seeElement('.error-summary');
    I.see('\n' +
        '                        Incorrect email/password combination\n' +
        '                    ', 'h3#failure-error-summary-heading');
    I.see('\n' +
        '                        Please check your email address and password and try again:\n' +
        '                    ', '.error-summary > p');

    I.dontSeeElement('h1');


});