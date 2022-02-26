const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    type: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        trim: true,
        required: [true, 'El nombre del usuario es requerido'],
    },
    bet: {
        type: Number,
    }

}, { timestamps: true });

module.exports = User = mongoose.model('user', userSchema);