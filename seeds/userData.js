const User = require('../models/User');
const bcrypt = require('bcrypt');

const userdata = [
    {
        first_name: 'Suvarna',
        last_name: 'Jadhav',
        email: 'suva@gmail.com',
        password: 'suva',
        phone_number: '2342342345',
        profile_picture: 'placeholder'
    },
    {
        first_name: 'Brian',
        last_name: 'McDonell',
        email: 'brian@gmail.com',
        password: 'brian',
        phone_number: '5432342345',
        profile_picture: 'placeholder'
    },
    {
        first_name: 'Pallavi',
        last_name: 'Talekar',
        email: 'talekar@gmail.com',
        password: 'pallu',
        phone_number: '8762342345',
        profile_picture: 'placeholder'
    },
    {
        first_name: 'Aditi',
        last_name: 'Pimple',
        email: 'pimple@gmail.com',
        password: 'aditi',
        phone_number: '7865940020',
        profile_picture: 'placeholder'
    },
    {
        first_name: 'Gabe',
        last_name: 'Perry',
        email: 'Gabe@gmail.com',
        password: 'gabe',
        phone_number: '6453526745',
        profile_picture: 'placeholder'
    },
    {
        first_name: 'Steve',
        last_name: 'Smith',
        email: 'Ssmith@gmail.com',
        password: 'Steve',
        phone_number: '9872342345',
        profile_picture: 'placeholder'
    }

];

const seedUser = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUser;
