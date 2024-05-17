const express = require('express');
const { param, body } = require('express-validator');

const authController = require('../controllers/auth');
const validators = require('../validators/auth');
const sanitizers = require('../sanitizers/auth');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post(
    '/login',
    ...validators.login,
    ...sanitizers.signup,
    authController.postLogin
);

router.post(
    '/signup',
    ...validators.signup,
    ...sanitizers.signup,
    authController.postSignup
);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;
