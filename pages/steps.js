'use strict';

const requireDirectory = require('require-directory'),
  steps = requireDirectory(module);

module.exports = function () {

    return actor({

        signInAndSignOut: steps.signin.signIn,
        inValidSignIn: steps.signin.inValidSignIn,
        feedback: steps.feedback.feedback,

    });
};
