const {Schema, model} = require("mongoose")
const User = require("./User")
const ReviewSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: User
    },
    title: {
        type: String,
        required: [true, "Review Title is Required"]
    },
    rate: {
        type: Number,
        required: [true, "Review Rate is Required"]
    },
    body: {
        type: String,
        required: [true, "Review Body is Required"]
    },
    on: {
        type: Schema.Types.ObjectId,
        required: true,
        // Instead of a hardcoded model name in `ref`, `refPath` means Mongoose
        // will look at the `onModel` property to find the right model.
        refPath: 'onModel'
    },
    onModel: {
        type: String,
        required: true,
        enum: ['Movies', 'Series']
    },
    scene_start:{
        type: String,
    },
    scene_end:{
        type: String,
    }
}, {timestamps: true})

module.exports = model("Reviews", ReviewSchema)
