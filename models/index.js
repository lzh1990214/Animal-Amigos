// const Pet = require('./Pet');
const User = require('./User');
const Wallet = require('./Wallet');
const Address = require('./Address');
// const Comments = require('./Comments');
const Pictures = require('./Pictures');
// const Likes = require('./Likes');
const Services = require('./Services');
const Security = require('./Security');

// User.hasMany(Pet, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// });

// Pet.belongsTo(User, {
//     foreignKey: 'user_id',
// });

User.hasOne(Wallet, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Wallet.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasOne(Security, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Security.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Services, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Services.belongsTo(User, {
    foreignKey: 'user_id',
});

// add association between comments and services. And think of any other association as well

User.hasOne(Address, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Address.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Pictures, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Pictures.belongsTo(User, {
    foreignKey: 'user_id',
});

// User.hasMany(Comments, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// });

// Comments.belongsTo(User, {
//     foreignKey: 'user_id',
// });

// User.hasMany(Likes, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// });

// Likes.belongsTo(User, {
//     foreignKey: 'user_id',
// });

// Pictures.hasMany(Comments, {
//     foreignKey: 'pictures_id',
//     onDelete: 'CASCADE',
// });

// Comments.belongsTo(Pictures, {
//     foreignKey: 'pictures_id',
// });


module.exports = { User, Wallet, Address, Pictures, Services };

