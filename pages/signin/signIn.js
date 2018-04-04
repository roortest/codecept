'use strict';

module.exports = function () {
    const I = this;

    I.seeCurrentUrlEquals('/login?response_type=code&client_id=ccd_gateway&redirect_uri=https%3A%2F%2Fcase-worker-web.dev.ccd.reform.hmcts.net%2Foauth2redirect');
    I.fillField("#username", "nybgul@gmail.com");
    I.fillField("#password", 'Monday01');
    I.click('Sign in');
    I.wait(5);
    I.see('Case List', 'h1');
    I.click('button.dropbtn');
    I.click('Sign Out');
    I.see('Your session has been closed', 'h1.heading-large');
    I.see('You have succesfully logged out and this window can now be closed.', 'p.lede');
};

