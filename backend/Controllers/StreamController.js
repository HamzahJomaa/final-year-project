const Movie = require("../Models/Movies")
const Series = require("../Models/Series")
const {InternalServerError} = require("../Constants/statusCodes");





exports.getStreamCast = async (req,res) =>{

}



exports.getStreamById = async (req,res)=>{
    let {id,type} = req.params
    try{
        let data = type === "movie" ? await Movie.findById(id) : await Series.findById(id)
        res.status(200).json({
            statusMessage: `${type} returned successfully`,
            data
        })
    }catch (e) {
        console.error(e)
        return res.status(500).json(InternalServerError)
    }
}



exports.getStream = async (req,res) =>{
    let { perPage, currentPage, type }  = req.params
    let pipeline = [{
        $facet: {
            metadata: [
                {$count: "total"},
                {$addFields: {page: parseInt(currentPage)}},
            ],
            data: [
                {$skip: perPage * (currentPage - 1)},
                {$limit: parseInt(perPage)},
            ], // add projection here wish you re-shape the docs
        },
    }]
    try{
        let data = type === "movie" ? await Movie.aggregate(pipeline) : await Series.aggregate(pipeline)
        res.status(200).json({
            ...data[0]
        })
    }catch (e) {
        console.error(e)
        return res.status(500).json(InternalServerError)
    }


}

