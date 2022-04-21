var recombee = require('recombee-api-client');
const axios = require("axios");
const Movies = require("../../Models/Movies")
const {InternalServerError} = require("../../Constants/statusCodes");
var rqs = recombee.requests;

var client = new recombee.ApiClient('rhudev-dev', "2AieMoSXzXrAMEpZGVh5xbQVSS6PXVF6nOIxvM8bacTPolmRaSmMUtePkAfAbFJC");


exports.ImportMovies = async (req, res) => {
    try {

        for (let i = 1; i <= 1 ; i++) {
            Movies.aggregate().lookup({
                from: 'genres',
                localField: 'genre_ids',
                foreignField: 'tmdb',
                as: 'genre'
            }).facet({metadata:[{$count: "total"},{$addFields: {page: i}}],data:[{$skip: 25 * (i - 1)},{$limit: 25}]})
                .then(movies=>{
                    movies[0].data && movies[0].data.map(async (movie,index)=>{
                        const addId = await client.send(new rqs.AddItem(movie.tmdb,{timestamp:new Date(),cascadeCreate:true}))
                        if (addId === "ok"){
                            const item = await client.send(new rqs.SetItemValues(movie.tmdb, {
                                title:movie.title,
                                vote_count: movie.vote_count,
                                vote_average: movie.vote_average,
                            }, {timestamp: new Date(), cascadeCreate: true}));
                            console.log("Item: " + index + 1)
                        }
                    })
                }).catch(err=>{
                console.error(err)
            })
        }
    }catch (e) {
        console.error(e)
        return res.status(500).json(InternalServerError)
    }
}