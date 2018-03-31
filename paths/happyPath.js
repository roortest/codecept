Feature('CCD login logout & feedback functionality');


Scenario("ccd Signin & Signout", function* (I) {

    I.amOnPage("/");
    browser.ignoreSynchronization = true;
    browser.waitForAngular();
    browser.sleep(500);
    I.wait(10);
    I.fillField("#username", "nybgul@gmail.com");
    I.fillField("#password", 'Monday01');
    I.click('Sign in');
    I.wait(10);
    I.see('Case List', 'h1');
    I.click('button.dropbtn');
    I.click('Sign Out');
    I.see('Your session has been closed', 'h1.heading-large');
    I.see('You have succesfully logged out and this window can now be closed.', 'p.lede');

});


Scenario("Invalid Signin", function* (I) {

    I.amOnPage("/");
    browser.ignoreSynchronization = true;
    browser.waitForAngular();
    browser.sleep(500);
    I.wait(10);
    I.fillField("#username", "testccd@gmail.com");
    I.fillField("#password", 'Monda567');
    I.click('Sign in');
    I.seeElement('.error-summary');
    I.see('Incorrect email/password combination', 'h3#failure-error-summary-heading');
    I.see('Please check your email address and password and try again:', '.error-summary > p');
    I.dontSee('Sign Out');


});


Scenario("feedback", function* (I) {

    I.amOnPage("/");
    browser.ignoreSynchronization = true;
    browser.waitForAngular();
    browser.sleep(500);
    I.wait(10);
    I.click('feedback');
    I.wait(10);
    I.amOnPage("http://www.smartsurvey.co.uk/s/58DYD/");
    I.seeElement('div.tLogo > img');
    I.see('Help us improve this service', 'h1.ss-survey-title');
    I.click('input#o540869344974458');
    I.fillField('#t44943949', 'test');
    I.click('input#cmdGo');
    I.wait(10);
    I.see('Thank you for your feedback', 'h2');


});