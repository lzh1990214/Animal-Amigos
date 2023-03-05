const Service = require('../models/Services');

const servicedata = [
    {
        requester: 1,
        service_picture: 'http://res.cloudinary.com/dx6nv04ky/image/upload/v1677874690/dog_jump.jpg',
        service_name: 'Dog Agility',
        service_description: 'Dog tricks and training',
        service_price: '40',
        service_status: 'active',
        service_date: 2023-05-12,
        service_time: '01:11:12',
        service_location: 'Washington DC',
        service_limitations: 'none',
        user_id: 1,
    },
    {
        requester: 2,
        service_picture: 'http://res.cloudinary.com/dx6nv04ky/image/upload/v1677874633/Cat_sitting.jpgSitting',
        service_name: 'Cat Sitting',
        service_description: 'cat sitting for you',
        service_price: '20',
        service_status: 'active',
        service_date: 2023-05-12,
        service_time: '01:11:12',
        service_location: 'columbia',
        service_limitations: 'none',
        user_id: 2,
    },
    {
        requester: 3,
        service_picture: 'http://res.cloudinary.com/dx6nv04ky/image/upload/v1677874717/dogleash.jpg',
        service_name: 'Solo Dog Walking',
        service_description: 'Dog Walking 30 min',
        service_price: '25',
        service_status: 'active',
        service_date: 2023-05-12,
        service_time: '01:11:12',
        service_location: 'Baltimore',
        service_limitations: 'none',
        user_id: 3,
    },
    {
        requester: 4,
        service_picture: 'http://res.cloudinary.com/dx6nv04ky/image/upload/v1677874776/walk_lizard.jpg',
        service_name: 'Reptile Walking',
        service_description: 'Lizards need love too! Reptile walking service, fast and friendly.',
        service_price: '10',
        service_status: 'active',
        service_date: 2023-09-12,
        service_time: '01:11:12',
        service_location: 'Crofton',
        service_limitations: 'none',
        user_id: 4,
    },
    {
        requester: 5,
        service_picture: 'http://res.cloudinary.com/dx6nv04ky/image/upload/v1677874812/walking_dogs.jpg',
        service_name: 'Dog Walking - Multiple',
        service_description: 'Can walk up to 5 dogs',
        service_price: '100',
        service_status: 'active',
        service_date: 2023-04-7,
        service_time: '01:11:12',
        service_location: 'Millersville',
        service_limitations: 'none',
        user_id: 5,
    },
    {
        requester: 6,
        service_picture: 'http://res.cloudinary.com/dx6nv04ky/image/upload/v1677874745/hamster_cardio.jpg',
        service_name: 'Animal Cardio',
        service_description: 'Will wear out your pet. Guaranteed',
        service_price: '60',
        service_status: 'active',
        service_date: 2023-08-12,
        service_time: '01:11:12',
        service_location: 'Alexandria',
        service_limitations: 'none',
        user_id: 6,
    },
];

const seedService = () => Service.bulkCreate(servicedata);

module.exports = seedService;

// 'http://res.cloudinary.com/dx6nv04ky/image/upload/v1677874633/Cat_sitting.jpg'
//  http://res.cloudinary.com/dx6nv04ky/image/upload/v1677874690/dog_jump.jpg
// 'http://res.cloudinary.com/dx6nv04ky/image/upload/v1677874717/dogleash.jpg'
// 'http://res.cloudinary.com/dx6nv04ky/image/upload/v1677874745/hamster_cardio.jpg'
// 'http://res.cloudinary.com/dx6nv04ky/image/upload/v1677874776/walk_lizard.jpg'
// 'http://res.cloudinary.com/dx6nv04ky/image/upload/v1677874812/walking_dogs.jpg'