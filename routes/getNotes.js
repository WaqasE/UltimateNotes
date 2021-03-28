const router = require('express').Router();
const { Note } = require('../model/notes');
const { User } = require('../model/users');

router.post('/', async (req, res) => {
    if (req.body._id) {
        let user = await User.findById(req.body._id)
        if (!user) { res.send('bad request').status(400); }
        else {
            const list = await Note.find({ userId: req.body._id });
            res.send(list).sendStatus(200);
        }

    }
    else {
        res.send('bad request').status(400);
    }
})

module.exports = router;