'use strict';

module.exports = function () {
    const I = this;

    I.fillField("#username", "nybgul@gmail.com");
    I.fillField("#password", 'Monday01');
    I.click('Sign in');
    I.see('button.dropbtn','Nayab Gul');
    I.click('button.dropbtn');
    I.see('.dropdown-content > a', 'Sign Out');
    I.click('Sign Out');
    I.see('Your session has been closed', 'h1.heading-large');
    I.see('You have succesfully logged out and this window can now be closed.', 'p.lede');


};