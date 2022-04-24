const Review = require("../Models/Review")
const Movie = require("../Models/Movies")
const Series = require("../Models/Series")
const {InternalServerError, DynamicMessage, NoContent} = require("../Constants/statusCodes");
const Mongoose = require("mongoose");
const { AddReview } = require("../Helpers/recommendation");

exports.deleteReview = async (req, res) => {
    let {id} = req.params
    try {
        const deletedReview = await Review.findByIdAndDelete(id)
        if (deletedReview) {
            const avg_review = await Review.aggregate().match({on: Mongoose.Types.ObjectId(deletedReview.on)}).group({
                _id: "$on",
                average: {$avg: "$rate"}
            })
            const count_review = await Review.aggregate().match({on: Mongoose.Types.ObjectId(deletedReview.on)}).count("rate")
            let vote_count = count_review.length === 0 ? 0 : count_review[0].rate
            let vote_average = avg_review.length === 0 ?  0 : avg_review[0].average

            deletedReview.onModel === "Series" ? await Series.updateOne({_id: deletedReview.on}, {
                vote_count,
                vote_average
            }) : await Movie.updateOne({_id: deletedReview.on}, {
                vote_count,
                vote_average
            })
            return res.status(200).json(DynamicMessage(200, "Review Deleted Successfully"))
        }
        return res.status(400).json(DynamicMessage(400, "An Unknown Error Occurred"))
    } catch (e) {
        console.error(e)
        return res.status(500).json(InternalServerError)
    }
}

exports.getRefReview = async (req, res) => {
    const on =
        req.body.token || req.query.token || req.headers["ref"]
    let {perPage, currentPage} = req.params
    try {
        const reviews = await Review.find({on}).skip(parseInt(perPage) * (parseInt(currentPage) - 1)).limit(parseInt(perPage)).populate({
            path: 'userId',
            select: "firstName lastName"
        }).populate({path: 'on', select: "title lastName"}).sort({_id:-1}).exec()
        if (reviews.length !== 0) {
            return res.status(200).json(DynamicMessage(200, reviews))
        }
        return res.status(204).json(NoContent)
    } catch (e) {
        console.error(e)
        return res.status(500).json(InternalServerError)
    }

}

exports.getUserReviews = async (req, res) => {
    const userId =
        req.body.token || req.query.token || req.headers["user"]

    let {perPage,page,type} = req.params
    let onModel = type === "movies" ? "Movies" : "Series"
    try {
        const reviews = await Review.find({userId,onModel}).skip(parseInt(perPage) * (parseInt(page) - 1)).limit(parseInt(perPage)).populate({
            path: 'userId',
            match: {_id: userId},
            select: "firstName lastName"
        }).populate({path: 'on', select: "title tmdb poster_path"}).exec()
        const review_count = await Review.find({userId,onModel}).count()
        if (reviews.length !== 0) {
            return res.status(200).json(DynamicMessage(200, {reviews,review_count}))
        }
        return res.status(204).json(NoContent)
    } catch (e) {
        console.error(e)
        return res.status(500).json(InternalServerError)
    }
}

exports.getReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate({
            path: 'userId',
            select: "firstName lastName"
        }).populate({path: 'on', select: "title lastName"}).exec()
        if (reviews.length !== 0) {
            return res.status(200).json(DynamicMessage(200, reviews))
        }
        return res.status(204).json(NoContent)
    } catch (e) {
        console.error(e)
        return res.status(500).json(InternalServerError)
    }
}

exports.addReview = async (req, res) => {
    let {review} = req.body
    try {
        const review_result = await AddReview({review})
        console.log(review_result)
        res.status(200).json(review_result)
    } catch (e) {
        console.error(e)
        res.status(500).json(InternalServerError)
    }
}