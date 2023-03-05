const router = require('express').Router();
const Wallet = require('../../models/Wallet');

router.get('/', async (req, res) => {
    try {
        const walletData = await Wallet.findAll();
        res.status(200).json(walletData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const walletData = await Wallet.findByPk(req.params.id);

        if (!walletData) {
            res.status(404).json({ message: 'No wallet found with this id!' });
            return;
        }

        res.status(200).json(walletData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const walletData = await Wallet.create({
            balance: req.body.balance,
            user_id: req.body.user_id,
        });
        res.status(200).json(walletData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const wallet = await Wallet.update({
            balance: req.body.balance,
            user_id: req.body.user_id,
        },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json(wallet);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const walletData = await Wallet.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!walletData) {
            res.status(404).json({ message: 'No wallet found with this id!' });
            return;
        }

        res.status(200).json(walletData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;