const router = require('express').Router();
const { Note } = require('../model/notes');
const { User } = require('../model/users');

router.post('/', async (req, res) => {
    if (req.body._id) {
        let user = await User.findById(req.body._id)
        if (!user) { res.send('bad request').status(400); }
        const note = new Note({ title: req.body.title, body: req.body.body, userId: user._id, date: req.body.date, time: req.body.time, edited: false })
        await note.save(note);
        res.send('note saved succefully').status(200);

    }
    else{
    res.send('bad request').status(400);}
})

module.exports = router;