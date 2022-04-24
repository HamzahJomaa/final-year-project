const math = require("mathjs")
const Review = require("../Models/Review")

const Series = require("../Models/Series")
const Movie = require("../Models/Movies")
const Mongoose = require("mongoose");


exports.AddReview = async ({review}) => {
    try {
        await Review.create(review)
        const avg_review = await Review.aggregate().match({on: Mongoose.Types.ObjectId(review.on)}).group({
            _id: "$on",
            average: {$avg: "$rate"}
        })
        const count_review = await Review.aggregate().match({on: Mongoose.Types.ObjectId(review.on)}).count("rate")
        return review.onModel === "Series" ? await Series.updateOne({_id: review.on}, {
            vote_count: count_review[0].rate,
            vote_average: avg_review[0].average
        }) : await Movie.updateOne({_id: review.on}, {
            vote_count: count_review[0].rate,
            vote_average: avg_review[0].average
        })
    } catch (e) {
        throw Error(e)
    }
}


exports.getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}