const Security = require('../models/Security');

const securitydata = [
    {
        question1: 'What is your mothers maiden name?',
        answer1: 'Smith',
        question2: 'What was the color of your first car?',
        answer2: 'Red',
        question3: 'What is your paternal grandfathers middle name?',
        answer3: 'Paul',
        user_id: 1,
    },
    {
        question1: 'What is your favorite food?',
        answer1: 'Tacos',
        question2: 'What is your favorite ice cream flavor?',
        answer2: 'Chocolate',
        question3: 'What is your favorite sport?',
        answer3: 'Basketball',
        user_id: 2,
    },
];

const seedSecurity = () => Security.bulkCreate(securitydata);

module.exports = seedSecurity;
