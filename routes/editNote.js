const router = require('express').Router();
const { Note } = require('../model/notes');
const { User } = require('../model/users');

router.post('/', async (req, res) => {
    if (req.body._id) {
        let note = await Note.findById(req.body._id)
        if (!note) { res.send('bad request').status(400); }
        note.title = req.body.title;
        note.body = req.body.body;
        note.userId = req.body.userId;
        note.date = req.body.date;
        note.time = req.body.time;
        note.edited = req.body.edited;
        await note.save(note);
        res.send('note saved edited').status(200);

    }
    else {
        res.send('bad request').status(400);
    }
})

module.exports = router;