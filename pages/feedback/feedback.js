'use strict';

module.exports = function () {
    const I = this;

    I.click('feedback');
    I.wait(5);
    I.seeCurrentUrlEquals("");
    I.seeElement('#frmSurvey > div.ss-survey-body > div > div.tBar > div > img');
    I.see('Help us improve this service', 'h1.ss-survey-title');
    I.click('input#o540869344974458');
    I.fillField('#t44943949', 'test');
    I.click('input#cmdGo');
    I.wait(2);
    I.see('Thank you for your feedback', 'h2');



};