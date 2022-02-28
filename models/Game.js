const { model, Schema } = require('mongoose');

const GameSchema = new Schema({
    inProgess: {
        type: Boolean,
        default: false,
    },

    winner: {
        type: Object,
    },

    gamers: [
        {
            id: Schema.ObjectId,
            name: String,
        },
    ],

    bet: {
        type: [{}],
    },
}, { timestamps: true });

module.exports = model('Game', GameSchema);
