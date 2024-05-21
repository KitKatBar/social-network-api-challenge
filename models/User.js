const { Schema, model } = require('mongoose');

// Schema to create a User model
const userSchema = new Schema(
    {
        user: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address!']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// Create a virtual property `friendCount` that gets the total friends associated with the user
userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
    });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
