const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const tripSchema = new Schema(
    {
        location: {
            type: {
                type: String
            },
            trim: true,
            required: true,
            coordinates: [Number],
            origin: String,
            destination: String
        },
        date: Date,
        trim: true,
        required: true,
        time: {
            type: String,
            trim: true,
            required: true,
            departure: String,
            arrive: String
        },
        price: {
            type: String,
            trim: true,
            required: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        complete: {
            type: Boolean,
            enum: [true, false],
            default: false
        }
    },
    {
        timestamps: true,
    });

const Trip = model("Trip", tripSchema);

module.exports = Trip;
