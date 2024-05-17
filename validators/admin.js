const { body, param } = require('express-validator');

exports.productValidation = [
    body('title', 'Please enter a title with at least three characters')
        .exists({ checkFalsy: true })
        .withMessage('You must type a title')
        .isString()
        .isLength({ min: 3 })
        .trim(),
    body('price', 'Please enter a valid price')
        .exists({ checkFalsy: true })
        .withMessage('You must type a price')
        .isFloat(),
    body(
        'description',
        'Please enter a valid description over 5 characters and under 400 characters'
    )
        .exists({ checkFalsy: true })
        .withMessage('You must type a description')
        .isLength({ min: 5, max: 400 })
        .trim()
];
