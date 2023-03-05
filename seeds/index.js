const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedSecurity = require('./securityData');
const seedService = require('./serviceData');
const seedWallet = require('./walletData');
const seedAddress = require('./addressData');

const seedAll = async () => {
    await sequelize.sync({ force: false });

    await seedUser();

    await seedSecurity();

    await seedService();

    await seedWallet();
    
    await seedAddress();

    process.exit(0);
};

seedAll();
