'use strict';

const requireDirectory = require('require-directory'),
  steps = requireDirectory(module);

module.exports = function () {

    return actor({

        //signinand sign out
        signin: steps.signin.signIn,

        // invalid signin
        invalidsignin: steps.signin.invalidsignin,

        //signout
        signout: steps.signout.signout,

        //feedback
        feedback: steps.feedback.feedback,

        //report a problem



    });
};
