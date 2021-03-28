const router = require('express').Router();
const { Note } = require('../model/notes');
const { User } = require('../model/users');

router.post('/', async (req, res) => {
    if (req.body._id) {
        let note = await Note.findById(req.body._id)
        note.delete().then((result, err) => {
            if (err) {
                console.log(err)
                res.sendStatus(400);
            }
            else {
                res.send('note deleted sucessfully.').status(200);

            }
        })
    }
    else {
        res.send('bad request').status(400);
    }
})

module.exports = router;
