import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    active: {type: Boolean, required: true},
    content: {type: String, required: true}
}, {versionKey: false});

export default mongoose.model('ToDo', schema);