const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../model/users');

router.post('/', async (req, res) => {
    if (req.body.username && req.body.password) {
        let user = await User.findOne({ username: req.body.username });
        if (!user) { return res.status(400).send('Invalid email or password.'); }
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword) return res.status(400).send('Invalid email or password.');
        return  res.send(user._id).status(200);
    }
    else {
        res.send('All fields are required').status(400);
    }
})

module.exports = router;