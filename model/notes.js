const mongoose = require('mongoose');
const notesSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        body:{
            type:String,
            required:true
        },
        userId:{
            type:String,
            required:true
        },
        date:{
            type:String,
            required:true
        },
        time:{
            type:String,
            required:true
        },
        edited:{
            type:Boolean,
            required:true
        }
    }
)

const Note = mongoose.model('Note', notesSchema);
exports.Note = Note;