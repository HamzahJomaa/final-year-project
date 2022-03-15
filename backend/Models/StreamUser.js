const {Schema, model} = require("mongoose")
const User = require("./User")
const StreamUser = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: User
    },
    Stream: {
        type: Schema.Types.ObjectId,
        required: true,
        // Instead of a hardcoded model name in `ref`, `refPath` means Mongoose
        // will look at the `onModel` property to find the right model.
        refPath: 'StreamModel'
    },
    StreamModel: {
        type: String,
        required: true,
        enum: ['Movies', 'Series']
    }
}, {timestamps: true})

module.exports = model("StreamUser", StreamUser)
