const { Schema, Types } = require('mongoose');
const { dateFormatter } = require('../utils/dateFormat');

// Schema to create a Reaction
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: dateFormatter
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

// Reaction is a Schema only
module.exports = reactionSchema;
