'use strict';

module.exports = function () {
    const I = this;

    I.wait(5);
    I.fillField("#username", "nybgul@gmail.com");
    I.fillField("#password", 'Monday01');
    I.click('Sign in');
    I.see('Nayab Gul','button.dropbtn');
    I.click('button.dropbtn');
    I.see('Sign Out','.dropdown-content > a');
    I.click('Sign Out');
    I.see('Your session has been closed', 'h1.heading-large');
    I.see('You have succesfully logged out and this window can now be closed.', 'p.lede');


};