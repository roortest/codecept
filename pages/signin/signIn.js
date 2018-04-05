'use strict';

module.exports = function () {
    const I = this;


    I.fillField("#username", "nybgul@gmail.com");
    I.fillField("#password", 'Monday01');
    I.click('Sign in');
    I.wait(2);
    I.see('button.dropbtn', 'Nayab Gul');
    I.see('Case List', 'h1');
    I.see('a.button', 'Create new case');
    I.seeTextEquals('Create new case');

};

