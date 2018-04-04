Feature('CCD login logout & feedback functionality');

Before(function* (I) {

    I.amOnPage('/');
    browser.ignoreSynchronization = true;
    browser.waitForAngular();
    I.wait(10);
});


Scenario("ccd Signin & Signout", function* (I) {
    I.signInAndSignOut();

});


Scenario("Invalid Signin", function* (I) {
    I.inValidSignIn();

});


Scenario("feedback", function* (I) {
    I.feedback();

});