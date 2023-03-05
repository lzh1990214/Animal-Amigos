const Wallet = require('../models/Wallet');

const walletdata = [
    {
        balance: 45,
        user_id: 1,
    },
    {
        balance: 55,
        user_id: 2,
    },
];

const seedWallet = () => Wallet.bulkCreate(walletdata);

module.exports = seedWallet;
