const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../model/users');

router.post('/', async (req, res) => {
    if (req.body.username && req.body.password) {
        let user = await User.findOne({ username: req.body.username });
        if (user) {
            res.send('Username already exists.').status(400);
        }
        else{
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
                user=new User({username:req.body.username,password:hashed});
                await user.save(user);
                return  res.send(user._id).status(200);
        }
    }
    else {
        res.send('All fields are required').status(400);
    }
})

module.exports = router;