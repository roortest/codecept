Feature('CCD login logout & feedback functionality');

Before(function* (I) {

    I.amOnPage('/');
    browser.ignoreSynchronization = true;
    browser.waitForAngular();
    I.wait(10);
    I.seeCurrentUrlEquals('https://idam.dev.ccidam.reform.hmcts.net/login?response_type=code&client_id=ccd_gateway&redirect_uri=https%3A%2F%2Fcase-worker-web.dev.ccd.reform.hmcts.net%2Foauth2redirect');


});


Scenario("ccd signin", function* (I) {
    I.signin();

});


Scenario("Invalid Signin", function* (I) {
    I.invalidsignin();

});


Scenario("feedback", function* (I) {
    I.feedback();

});


Scenario("signout", function* (I) {

    I.signout();
});

// Scenario("report a problem", function* (I){
//
//
//
// });
