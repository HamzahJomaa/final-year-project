const math = require("mathjs")



exports.getQuantile = (array,percent) =>{
    return math.quantileSeq(array,percent)
}

exports.getWeightedRate = (vote_count, vote_average,m,C) =>{
    return (vote_count/(vote_count+m) * vote_average) + (m/(m+vote_count) * C)
}

exports.getMean = (array) =>{
    let sum = 0
    array.map(item=>{
        sum += item
    })
    return sum / array.length
}