const { model, Schema } = require('mongoose');

/**
 * Representa el Schema del juego.
 * @version 1.0.0 2022-03-01
 * @author Juan David Rojas.
 */
const GameSchema = new Schema(
    {
        inProgress: {
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
    },
    { timestamps: true }
);

module.exports = model('Game', GameSchema);
