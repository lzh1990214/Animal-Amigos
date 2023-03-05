const Address = require('../models/Address');

const addressdata = [
    {
        ID: '()',
        address: '6502 47th St.',
        city: 'Riverdale',
        state: 'MD',
        zip: '20737',
        country: 'US',
        user_id: '()',
    },
    {
        ID: '()',
        address: '7904 Colonial Ln.',
        city: 'Clinton',
        state: 'MD',
        zip: '20735',
        country: 'US',
        user_id: '()',
    },
    {
        ID: '()',
        address: '219 Fox Hill Rd.',
        city: 'Vilas',
        state: 'NC',
        zip: '28692',
        country: 'US',
        user_id: '()',
    },
    {
        ID: '()',
        address: '1035 Imagine Ln.',
        city: 'Fredericksburg',
        state: 'VA',
        zip: '22401',
        country: 'US',
        user_id: '()',
    },
    {
        ID: '()',
        address: '915 Steed Rd.',
        city: 'Ft. Washington',
        state: 'MD',
        zip: '20744',
        country: 'US',
        user_id: '()',
    },
    {
        ID: '()',
        address: '4809 Hamilton St.',
        city: 'Hyattsville',
        state: 'MD',
        zip: '20781',
        country: 'US',
        user_id: '()',
    }
];

const seedAddress = () => Address.bulkCreate(addressdata);

module.exports = seedAddress;