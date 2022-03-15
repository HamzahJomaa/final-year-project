
$(document).ready( function () {


    RetrieveStream("movie",1,(movies=>{
        movies?.data?.map(element=>{
            $("#movie_listing").append(`
                <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="movie-box-2 mb30">
                            <div class="listing-container">

                                <!-- Movie List Image -->
                                <div class="listing-image">

                                    <!-- Play Button -->
                                    <div class="play-btn">
                                        <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" class="play-video">
                                            <i class="fa fa-play"></i>
                                        </a>
                                    </div>

                                    <!-- Buttons -->
                                    <div class="buttons">
                                        <a href="#" data-original-title="Rate" data-toggle="tooltip" data-placement="bottom" class="like">
                                            <i class="icon-heart"></i>
                                        </a>

                                        <a href="#" data-original-title="Share" data-toggle="tooltip" data-placement="bottom" class="share">
                                            <i class="icon-share"></i>
                                        </a>
                                    </div>

                                    <!-- Rating -->
                                    <div class="stars">
                                        <div class="rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-o"></i>
                                        </div>
                                    </div>

                                    <!-- Image -->
                                    <img src="assets/images/posters/poster-1.jpg" alt="">
                                </div>

                                <!-- Movie List Content -->
                                <div class="listing-content">
                                    <div class="inner">
                                        <h2 class="title">${element.title}</h2>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam...</p>

                                        <a href="movie-detail.html?id=${element._id}" class="btn btn-main btn-effect">details</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                `)
        })
        let pages = Math.round(movies.metadata[0].total / 10 / 10) * 10

        $(".pagination #paginate-right").click(function (){
            let current = $(".pagination li a.current-page")
            if ($(current[0]).text() == 1){
                $(current[0]).removeClass("current-page")
                $($(".pagination li a")[1]).addClass("current-page")
            }else{

            }
            // console.log(current[1].add)
        })
    }))



})




