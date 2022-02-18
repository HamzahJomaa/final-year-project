var recombee = require('recombee-api-client');
const axios = require("axios");
const Movies = require("../../Models/Movies")
var rqs = recombee.requests;

var client = new recombee.ApiClient('rhu-dev', "MjYXwZePh5D7275IAiDrivUSFsIMIS6YwMVMwgOhrJ2J9D89k1zEnPmt7GBDZcNg");


exports.ImportMovies = async (req, res) => {
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
                            overview: movie.overview,
                            genre: movie.genre.map(e=>{return e.name})
                        }, {timestamp: new Date(), cascadeCreate: true}));
                        console.log("Item: " + index + 1)
                    }
                })
            }).catch(err=>{
            console.error(err)
        })
    }
}