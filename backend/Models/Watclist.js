const {Schema, model} = require("mongoose")
const User = require("./User")
const watchListSchema = Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: User
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
    watched:{
        type: Boolean,
        default: false
    }
},{timestamps:true})
module.exports = model("watchlists", watchListSchema)
