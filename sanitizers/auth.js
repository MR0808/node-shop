const { body, param } = require('express-validator');

exports.login = [body('email').normalizeEmail()];

exports.signup = [body('email').normalizeEmail()];

exports.passwordReset = [];

exports.resetPassword = [];
