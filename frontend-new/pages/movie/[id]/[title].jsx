import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {BuyTicket, getStream, VisitedStream} from "../../../api/Main";
import HeroComponent from "../../../components/HeroComponent";
import {SpliceByWord , BeautifyShortDate} from "../../../helpers/contenthelper";

const MoviePage = ({movie,recommendation,cast, images}) => {
    const router = useRouter()
    const [release,setRelease] = useState(new Date(movie.date))
    const [director,setDirector] = useState(...cast.crew.filter(e => e.job === "Director"))
    const [writer,setWriter] = useState(...cast.crew.filter(e => e.job === "Writer"))
    let profile,token

    if (typeof window !== "undefined") {
        profile = localStorage.getItem("id")
        token = localStorage.getItem("token")
    }

    const handleTicket = async () =>{
        try {
            await BuyTicket({StreamModel:"Movies",Stream:movie._id,userId: profile,token})
        }catch (e) {
            console.error(e)
        }
    }

    useEffect(async ()=>{
        try {
            if (profile){
                await VisitedStream({StreamModel:"Movies",Stream:movie._id,userId: profile,token})
            }
        }catch (error) {
            console.log(error)
            if (error.response.status === 401 || error.response.status === 403) {
                localStorage.clear()
            }
        }
    },[])
    return (
        <>
            <HeroComponent type={"mv-single-hero"} bgimg={movie?.backdrop_path} />
            <div className="page-single movie-single movie_single">
                <div className="container">
                    <div className="row ipad-width2">
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="movie-img sticky-sb">
                                <img src={`https://image.tmdb.org/t/p/w342/${movie?.poster_path}`} alt=""/>
                                <div className="movie-btn">
                                    <div className="btn-transform transform-vertical red">
                                        <div><a href="#" className="item item-1 redbtn"> <i
                                            className="ion-play"></i> Watch Trailer</a></div>
                                        <div><a href="https://www.youtube.com/embed/o-0hcF97wy0"
                                                className="item item-2 redbtn fancybox-media hvr-grow"><i
                                            className="ion-play"></i></a></div>
                                    </div>
                                    <div className="btn-transform transform-vertical">
                                        <div><button onClick={handleTicket} className="item item-1 yellowbtn"> <i
                                            className="ion-card"></i> Buy ticket</button></div>
                                        <div><button onClick={handleTicket} className="item item-2 yellowbtn"><i className="ion-card"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            <div className="movie-single-ct main-content">
                                <h1 className="bd-hd">{movie?.title} <span>{release.getFullYear()}</span></h1>
                                <div className="social-btn">
                                    <a href="#" className="parent-btn"><i className="ion-heart"></i> Add to Favorite</a>
                                    <div className="hover-bnt">
                                        <a href="#" className="parent-btn"><i className="ion-android-share-alt"></i>share</a>
                                        <div className="hvr-item">
                                            <a href="#" className="hvr-grow"><i className="ion-social-facebook"></i></a>
                                            <a href="#" className="hvr-grow"><i className="ion-social-twitter"></i></a>
                                            <a href="#" className="hvr-grow"><i
                                                className="ion-social-googleplus"></i></a>
                                            <a href="#" className="hvr-grow"><i className="ion-social-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="movie-rate">
                                    <div className="rate">
                                        <i className="ion-android-star"></i>
                                        <p><span>{movie?.vote_average}</span> /5<br />
                                            <span className="rv">{movie?.vote_count} Reviews</span>
                                        </p>
                                    </div>
                                    <div className="rate-star">
                                        <p>Rate This Movie: </p>
                                        <i className="ion-ios-star"></i>
                                        <i className="ion-ios-star"></i>
                                        <i className="ion-ios-star"></i>
                                        <i className="ion-ios-star"></i>
                                        <i className="ion-ios-star"></i>
                                        <i className="ion-ios-star"></i>
                                        <i className="ion-ios-star"></i>
                                        <i className="ion-ios-star"></i>
                                        <i className="ion-ios-star-outline"></i>
                                    </div>
                                </div>
                                <div className="movie-tabs">
                                    <div className="tabs">
                                        <ul className="tab-links tabs-mv">
                                            <li className="active"><a href="#overview">Overview</a></li>
                                            <li><a href="#reviews"> Reviews</a></li>
                                            <li><a href="#cast"> Cast & Crew </a></li>
                                            <li><a href="#media"> Media</a></li>
                                            <li><a href="#moviesrelated"> Related Movies</a></li>
                                        </ul>
                                        <div className="tab-content">
                                            <div id="overview" className="tab active">
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-12 col-xs-12">
                                                        <p>{movie?.overview}</p>
                                                        <div className="title-hd-sm">
                                                            <h4>Videos & Photos</h4>
                                                            <a href="#" className="time">All 5 Videos & 245 Photos <i
                                                                className="ion-ios-arrow-right"></i></a>
                                                        </div>
                                                        <div className="mvsingle-item ov-item">
                                                            {images?.backdrops?.length > 0 ? images?.backdrops?.map((element,index)=>(
                                                                <a key={index} className="img-lightbox" data-fancybox-group="gallery"
                                                                   href={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${element.file_path}`}><img
                                                                    src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${element.file_path}`} width="100" alt=""/></a>

                                                            )):""}
                                                        </div>
                                                        {/*<div className="title-hd-sm">*/}
                                                        {/*    <h4>cast</h4>*/}
                                                        {/*    <a href="#" className="time">Full Cast & Crew <i*/}
                                                        {/*        className="ion-ios-arrow-right"></i></a>*/}
                                                        {/*</div>*/}

                                                        {/*<div className="mvcast-item">*/}
                                                        {/*    <div className="cast-it">*/}
                                                        {/*        <div className="cast-left">*/}
                                                        {/*            <img src="images/uploads/cast1.jpg" alt=""/>*/}
                                                        {/*            <a href="#">Robert Downey Jr.</a>*/}
                                                        {/*        </div>*/}
                                                        {/*        <p>... Robert Downey Jr.</p>*/}
                                                        {/*    </div>*/}
                                                        {/*    <div className="cast-it">*/}
                                                        {/*        <div className="cast-left">*/}
                                                        {/*            <img src="images/uploads/cast2.jpg" alt=""/>*/}
                                                        {/*            <a href="#">Chris Hemsworth</a>*/}
                                                        {/*        </div>*/}
                                                        {/*        <p>... Thor</p>*/}
                                                        {/*    </div>*/}
                                                        {/*    <div className="cast-it">*/}
                                                        {/*        <div className="cast-left">*/}
                                                        {/*            <img src="images/uploads/cast3.jpg" alt=""/>*/}
                                                        {/*            <a href="#">Mark Ruffalo</a>*/}
                                                        {/*        </div>*/}
                                                        {/*        <p>... Bruce Banner/ Hulk</p>*/}
                                                        {/*    </div>*/}
                                                        {/*    <div className="cast-it">*/}
                                                        {/*        <div className="cast-left">*/}
                                                        {/*            <img src="images/uploads/cast4.jpg" alt=""/>*/}
                                                        {/*            <a href="#">Chris Evans</a>*/}
                                                        {/*        </div>*/}
                                                        {/*        <p>... Steve Rogers/ Captain America</p>*/}
                                                        {/*    </div>*/}
                                                        {/*    <div className="cast-it">*/}
                                                        {/*        <div className="cast-left">*/}
                                                        {/*            <img src="images/uploads/cast5.jpg" alt=""/>*/}
                                                        {/*            <a href="#">Scarlett Johansson</a>*/}
                                                        {/*        </div>*/}
                                                        {/*        <p>... Natasha Romanoff/ Black Widow</p>*/}
                                                        {/*    </div>*/}
                                                        {/*    <div className="cast-it">*/}
                                                        {/*        <div className="cast-left">*/}
                                                        {/*            <img src="images/uploads/cast6.jpg" alt=""/>*/}
                                                        {/*            <a href="#">Jeremy Renner</a>*/}
                                                        {/*        </div>*/}
                                                        {/*        <p>... Clint Barton/ Hawkeye</p>*/}
                                                        {/*    </div>*/}
                                                        {/*    <div className="cast-it">*/}
                                                        {/*        <div className="cast-left">*/}
                                                        {/*            <img src="images/uploads/cast7.jpg" alt=""/>*/}
                                                        {/*            <a href="#">James Spader</a>*/}
                                                        {/*        </div>*/}
                                                        {/*        <p>... Ultron</p>*/}
                                                        {/*    </div>*/}
                                                        {/*    <div className="cast-it">*/}
                                                        {/*        <div className="cast-left">*/}
                                                        {/*            <img src="images/uploads/cast9.jpg" alt=""/>*/}
                                                        {/*            <a href="#">Don Cheadle</a>*/}
                                                        {/*        </div>*/}
                                                        {/*        <p>... James Rhodes/ War Machine</p>*/}
                                                        {/*    </div>*/}
                                                        {/*</div>*/}
                                                        {/*<div className="title-hd-sm">*/}
                                                        {/*    <h4>User reviews</h4>*/}
                                                        {/*    <a href="#" className="time">See All 56 Reviews <i*/}
                                                        {/*        className="ion-ios-arrow-right"></i></a>*/}
                                                        {/*</div>*/}

                                                        {/*<div className="mv-user-review-item">*/}
                                                        {/*    <h3>Best Marvel movie in my opinion</h3>*/}
                                                        {/*    <div className="no-star">*/}
                                                        {/*        <i className="ion-android-star"></i>*/}
                                                        {/*        <i className="ion-android-star"></i>*/}
                                                        {/*        <i className="ion-android-star"></i>*/}
                                                        {/*        <i className="ion-android-star"></i>*/}
                                                        {/*        <i className="ion-android-star"></i>*/}
                                                        {/*        <i className="ion-android-star"></i>*/}
                                                        {/*        <i className="ion-android-star"></i>*/}
                                                        {/*        <i className="ion-android-star"></i>*/}
                                                        {/*        <i className="ion-android-star"></i>*/}
                                                        {/*        <i className="ion-android-star last"></i>*/}
                                                        {/*    </div>*/}
                                                        {/*    <p className="time">*/}
                                                        {/*        17 December 2016 by <a href="#"> hawaiipierson</a>*/}
                                                        {/*    </p>*/}
                                                        {/*    <p>This is by far one of my favorite movies from the MCU.*/}
                                                        {/*        The introduction of new Characters both good and bad*/}
                                                        {/*        also makes the movie more exciting. giving the*/}
                                                        {/*        characters more of a back story can also help audiences*/}
                                                        {/*        relate more to different characters better, and it*/}
                                                        {/*        connects a bond between the audience and actors or*/}
                                                        {/*        characters. Having seen the movie three times does not*/}
                                                        {/*        bother me here as it is as thrilling and exciting every*/}
                                                        {/*        time I am watching it. In other words, the movie is by*/}
                                                        {/*        far better than previous movies (and I do love*/}
                                                        {/*        everything Marvel), the plotting is splendid (they*/}
                                                        {/*        really do out do themselves in each film, there are no*/}
                                                        {/*        problems watching it more than once.</p>*/}
                                                        {/*</div>*/}
                                                    </div>
                                                    <div className="col-md-4 col-xs-12 col-sm-12">
                                                        <div className="sb-it">
                                                            <h6>Director: </h6>
                                                            <p>{director?.name}</p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>Writer: </h6>
                                                            <p>{writer?.name}</p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>Stars: </h6>
                                                            <p><a href="#">Robert Downey Jr,</a> <a href="#">Chris
                                                                Evans,</a> <a href="#">Mark Ruffalo,</a><a
                                                                href="#"> Scarlett Johansson</a></p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>Genres:</h6>
                                                            <p>{movie?.genres}</p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>Release Date:</h6>
                                                            <p>{BeautifyShortDate(release)}</p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>Run Time:</h6>
                                                            <p>141 min</p>
                                                        </div>
                                                        <div className="ads">
                                                            <img src="images/uploads/ads1.png" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*<div id="reviews" className="tab review">*/}
                                            {/*    <div className="row">*/}
                                            {/*        <div className="rv-hd">*/}
                                            {/*            <div className="div">*/}
                                            {/*                <h3>Related Movies To</h3>*/}
                                            {/*                <h2>Skyfall: Quantum of Spectre</h2>*/}
                                            {/*            </div>*/}
                                            {/*            <a href="#" className="redbtn">Write Review</a>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="topbar-filter">*/}
                                            {/*            <p>Found <span>56 reviews</span> in total</p>*/}
                                            {/*            <label>Filter by:</label>*/}
                                            {/*            <select>*/}
                                            {/*                <option value="popularity">Popularity Descending</option>*/}
                                            {/*                <option value="popularity">Popularity Ascending</option>*/}
                                            {/*                <option value="rating">Rating Descending</option>*/}
                                            {/*                <option value="rating">Rating Ascending</option>*/}
                                            {/*                <option value="date">Release date Descending</option>*/}
                                            {/*                <option value="date">Release date Ascending</option>*/}
                                            {/*            </select>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="mv-user-review-item">*/}
                                            {/*            <div className="user-infor">*/}
                                            {/*                <img src="images/uploads/userava1.jpg" alt=""/>*/}
                                            {/*                <div>*/}
                                            {/*                    <h3>Best Marvel movie in my opinion</h3>*/}
                                            {/*                    <div className="no-star">*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star last"></i>*/}
                                            {/*                    </div>*/}
                                            {/*                    <p className="time">*/}
                                            {/*                        17 December 2016 by <a href="#"> hawaiipierson</a>*/}
                                            {/*                    </p>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*            <p>This is by far one of my favorite movies from the MCU. The*/}
                                            {/*                introduction of new Characters both good and bad also makes*/}
                                            {/*                the movie more exciting. giving the characters more of a*/}
                                            {/*                back story can also help audiences relate more to different*/}
                                            {/*                characters better, and it connects a bond between the*/}
                                            {/*                audience and actors or characters. Having seen the movie*/}
                                            {/*                three times does not bother me here as it is as thrilling*/}
                                            {/*                and exciting every time I am watching it. In other words,*/}
                                            {/*                the movie is by far better than previous movies (and I do*/}
                                            {/*                love everything Marvel), the plotting is splendid (they*/}
                                            {/*                really do out do themselves in each film, there are no*/}
                                            {/*                problems watching it more than once.</p>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="mv-user-review-item">*/}
                                            {/*            <div className="user-infor">*/}
                                            {/*                <img src="images/uploads/userava2.jpg" alt=""/>*/}
                                            {/*                <div>*/}
                                            {/*                    <h3>Just about as good as the first one!</h3>*/}
                                            {/*                    <div className="no-star">*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                    </div>*/}
                                            {/*                    <p className="time">*/}
                                            {/*                        17 December 2016 by <a href="#"> hawaiipierson</a>*/}
                                            {/*                    </p>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*            <p>Avengers Age of Ultron is an excellent sequel and a worthy*/}
                                            {/*                MCU title! There are a lot of good and one thing that feels*/}
                                            {/*                off in my opinion. </p>*/}

                                            {/*            <p>THE GOOD:</p>*/}

                                            {/*            <p>First off the action in this movie is amazing, to buildings*/}
                                            {/*                crumbling, to evil blue eyed robots tearing stuff up, this*/}
                                            {/*                movie has the action perfectly handled. And with that action*/}
                                            {/*                comes visuals. The visuals are really good, even though you*/}
                                            {/*                can see clearly where they are through the movie, but that*/}
                                            {/*                doesn't detract from the experience. While all the CGI glory*/}
                                            {/*                is taking place, there are lovable characters that are in*/}
                                            {/*                the mix. First off the original characters, Iron Man,*/}
                                            {/*                Captain America, Thor, Hulk, Black Widow, and Hawkeye, are*/}
                                            {/*                just as brilliant as they are always. And Joss Whedon fixed*/}
                                            {/*                my main problem in the first Avengers by putting in more*/}
                                            {/*                Hawkeye and him more fleshed out. Then there is the new*/}
                                            {/*                Avengers, Quicksilver, Scarletwich, and Vision, they are*/}
                                            {/*                pretty cool in my opinion. Vision in particular is pretty*/}
                                            {/*                amazing in all his scenes.</p>*/}

                                            {/*            <p>THE BAD:</p>*/}

                                            {/*            <p>The beginning of the film it's fine until towards the second*/}
                                            {/*                act and there is when it starts to feel a little rushed.*/}
                                            {/*                Also I do feel like there are scenes missing but there was*/}
                                            {/*                talk of an extended version on Blu-Ray so that's cool.</p>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="mv-user-review-item">*/}
                                            {/*            <div className="user-infor">*/}
                                            {/*                <img src="images/uploads/userava3.jpg" alt=""/>*/}
                                            {/*                <div>*/}
                                            {/*                    <h3>One of the most boring exepirences from watching a*/}
                                            {/*                        movie</h3>*/}
                                            {/*                    <div className="no-star">*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star last"></i>*/}
                                            {/*                        <i className="ion-android-star last"></i>*/}
                                            {/*                        <i className="ion-android-star last"></i>*/}
                                            {/*                        <i className="ion-android-star last"></i>*/}
                                            {/*                        <i className="ion-android-star last"></i>*/}
                                            {/*                        <i className="ion-android-star last"></i>*/}
                                            {/*                        <i className="ion-android-star last"></i>*/}
                                            {/*                        <i className="ion-android-star last"></i>*/}
                                            {/*                        <i className="ion-android-star last"></i>*/}
                                            {/*                    </div>*/}
                                            {/*                    <p className="time">*/}
                                            {/*                        26 March 2017 by<a href="#"> christopherfreeman</a>*/}
                                            {/*                    </p>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*            <p>I can't right much... it's just so forgettable...Okay, from*/}
                                            {/*                what I remember, I remember just sitting down on my seat and*/}
                                            {/*                waiting for the movie to begin. 5 minutes into the movie,*/}
                                            {/*                boring scene of Tony Stark just talking to his "dead"*/}
                                            {/*                friends saying it's his fault. 10 minutes in: Boring scene*/}
                                            {/*                of Ultron and Jarvis having robot space battles(I dunno:/).*/}
                                            {/*                15 minutes in: I leave the theatre.2nd attempt at watching*/}
                                            {/*                it: I fall asleep. What woke me up is the next movie on*/}
                                            {/*                Netflix when the movie was over.</p>*/}

                                            {/*            <p>Bottemline: It's boring...</p>*/}

                                            {/*            <p>10/10 because I'm a Marvel Fanboy</p>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="mv-user-review-item ">*/}
                                            {/*            <div className="user-infor">*/}
                                            {/*                <img src="images/uploads/userava4.jpg" alt=""/>*/}
                                            {/*                <div>*/}
                                            {/*                    <h3>That spirit of fun</h3>*/}
                                            {/*                    <div className="no-star">*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star last"></i>*/}
                                            {/*                        <i className="ion-android-star last"></i>*/}
                                            {/*                        <i className="ion-android-star last"></i>*/}
                                            {/*                        <i className="ion-android-star last"></i>*/}
                                            {/*                    </div>*/}
                                            {/*                    <p className="time">*/}
                                            {/*                        26 March 2017 by <a href="#"> juliawest</a>*/}
                                            {/*                    </p>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*            <p>If there were not an audience for Marvel comic heroes than*/}
                                            {/*                clearly these films would not be made, to answer one other*/}
                                            {/*                reviewer although I sympathize with him somewhat. The world*/}
                                            {/*                is indeed an infinitely more complex place than the world of*/}
                                            {/*                Marvel comics with clearly identifiable heroes and villains.*/}
                                            {/*                But I get the feeling that from Robert Downey, Jr. on down*/}
                                            {/*                the organizer and prime mover as Iron Man behind the*/}
                                            {/*                Avengers these players do love doing these roles because*/}
                                            {/*                it's a lot of fun. If they didn't show that spirit of fun to*/}
                                            {/*                the audience than these films would never be made.</p>*/}

                                            {/*            <p>So in that spirit of fun Avengers: Age Of Ultron comes before*/}
                                            {/*                us and everyone looks like they're having a good time saving*/}
                                            {/*                the world. A computer program got loose and took form in*/}
                                            {/*                this dimension named Ultron and James Spader who is*/}
                                            {/*                completely unrecognizable is running amuck in the earth. No*/}
                                            {/*                doubt Star Trek fans took notice that this guy's mission is*/}
                                            {/*                to cleanse the earth much like that old earth probe NOMAD*/}
                                            {/*                which got its programming mixed up in that classic Star Trek*/}
                                            {/*                prime story. Wouldst Captain James T. Kirk of the Enterprise*/}
                                            {/*                had a crew like Downey has at his command.</p>*/}
                                            {/*            <p>My favorite is always Chris Evans because of the whole cast*/}
                                            {/*                he best gets into the spirit of being a superhero. Of all of*/}
                                            {/*                them, he's already played two superheroes, Captain America*/}
                                            {/*                and Johnny Storm the Human Torch. I'll be before he's done*/}
                                            {/*                Evans will play a couple of more as long as the money's good*/}
                                            {/*                and he enjoys it.</p>*/}

                                            {/*            <p>Pretend you're a kid again and enjoy, don't take it so*/}
                                            {/*                seriously.</p>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="mv-user-review-item last">*/}
                                            {/*            <div className="user-infor">*/}
                                            {/*                <img src="images/uploads/userava5.jpg" alt=""/>*/}
                                            {/*                <div>*/}
                                            {/*                    <h3>Impressive Special Effects and Cast</h3>*/}
                                            {/*                    <div className="no-star">*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star"></i>*/}
                                            {/*                        <i className="ion-android-star last"></i>*/}
                                            {/*                        <i className="ion-android-star last"></i>*/}
                                            {/*                    </div>*/}
                                            {/*                    <p className="time">*/}
                                            {/*                        26 March 2017 by <a href="#"> johnnylee</a>*/}
                                            {/*                    </p>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*            <p>The Avengers raid a Hydra base in Sokovia commanded by*/}
                                            {/*                Strucker and they retrieve Loki's scepter. They also*/}
                                            {/*                discover that Strucker had been conducting experiments with*/}
                                            {/*                the orphan twins Pietro Maximoff (Aaron Taylor-Johnson), who*/}
                                            {/*                has super speed, and Wanda Maximoff (Elizabeth Olsen), who*/}
                                            {/*                can control minds and project energy. Tony Stark (Robert*/}
                                            {/*                Downey Jr.) discovers an Artificial Intelligence in the*/}
                                            {/*                scepter and convinces Bruce Banner (Mark Ruffalo) to*/}
                                            {/*                secretly help him to transfer the A.I. to his Ultron defense*/}
                                            {/*                system. However, the Ultron understands that is necessary to*/}
                                            {/*                annihilate mankind to save the planet, attacks the Avengers*/}
                                            {/*                and flees to Sokovia with the scepter. He builds an armature*/}
                                            {/*                for self-protection and robots for his army and teams up*/}
                                            {/*                with the twins. The Avengers go to Clinton Barton's house to*/}
                                            {/*                recover, but out of the blue, Nick Fury (Samuel L. Jackson)*/}
                                            {/*                arrives and convinces them to fight against Ultron. Will*/}
                                            {/*                they succeed? </p>*/}

                                            {/*            <p>"Avengers: Age of Ultron" is an entertaining adventure with*/}
                                            {/*                impressive special effects and cast. The storyline might be*/}
                                            {/*                better, since most of the characters do not show any*/}
                                            {/*                chemistry. However, it is worthwhile watching this film*/}
                                            {/*                since the amazing special effects are not possible to be*/}
                                            {/*                described in words. Why Pietro has to die is also not*/}
                                            {/*                possible to be explained. My vote is eight.</p>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="topbar-filter">*/}
                                            {/*            <label>Reviews per page:</label>*/}
                                            {/*            <select>*/}
                                            {/*                <option value="range">5 Reviews</option>*/}
                                            {/*                <option value="saab">10 Reviews</option>*/}
                                            {/*            </select>*/}
                                            {/*            <div className="pagination2">*/}
                                            {/*                <span>Page 1 of 6:</span>*/}
                                            {/*                <a className="active" href="#">1</a>*/}
                                            {/*                <a href="#">2</a>*/}
                                            {/*                <a href="#">3</a>*/}
                                            {/*                <a href="#">4</a>*/}
                                            {/*                <a href="#">5</a>*/}
                                            {/*                <a href="#">6</a>*/}
                                            {/*                <a href="#"><i className="ion-arrow-right-b"></i></a>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div id="cast" className="tab">*/}
                                            {/*    <div className="row">*/}
                                            {/*        <h3>Cast & Crew of</h3>*/}
                                            {/*        <h2>Avengers: Age of Ultron</h2>*/}

                                            {/*        <div className="title-hd-sm">*/}
                                            {/*            <h4>Directors & Credit Writers</h4>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="mvcast-item">*/}
                                            {/*            <div className="cast-it">*/}
                                            {/*                <div className="cast-left">*/}
                                            {/*                    <h4>JW</h4>*/}
                                            {/*                    <a href="#">Joss Whedon</a>*/}
                                            {/*                </div>*/}
                                            {/*                <p>... Director</p>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}

                                            {/*        <div className="title-hd-sm">*/}
                                            {/*            <h4>Directors & Credit Writers</h4>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="mvcast-item">*/}
                                            {/*            <div className="cast-it">*/}
                                            {/*                <div className="cast-left">*/}
                                            {/*                    <h4>SL</h4>*/}
                                            {/*                    <a href="#">Stan Lee</a>*/}
                                            {/*                </div>*/}
                                            {/*                <p>... (based on Marvel comics)</p>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="cast-it">*/}
                                            {/*                <div className="cast-left">*/}
                                            {/*                    <h4>JK</h4>*/}
                                            {/*                    <a href="#">Jack Kirby</a>*/}
                                            {/*                </div>*/}
                                            {/*                <p>... (based on Marvel comics)</p>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="cast-it">*/}
                                            {/*                <div className="cast-left">*/}
                                            {/*                    <h4>JS</h4>*/}
                                            {/*                    <a href="#">Joe Simon</a>*/}
                                            {/*                </div>*/}
                                            {/*                <p>... (character created by: Captain America)</p>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="cast-it">*/}
                                            {/*                <div className="cast-left">*/}
                                            {/*                    <h4>JS</h4>*/}
                                            {/*                    <a href="#">Joe Simon</a>*/}
                                            {/*                </div>*/}
                                            {/*                <p>... (character created by: Thanos)</p>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="cast-it">*/}
                                            {/*                <div className="cast-left">*/}
                                            {/*                    <h4>RT</h4>*/}
                                            {/*                    <a href="#">Roy Thomas</a>*/}
                                            {/*                </div>*/}
                                            {/*                <p>... (character created by: Ultron, Vision)</p>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="cast-it">*/}
                                            {/*                <div className="cast-left">*/}
                                            {/*                    <h4>JB</h4>*/}
                                            {/*                    <a href="#">John Buscema</a>*/}
                                            {/*                </div>*/}
                                            {/*                <p>... (character created by: Ultron, Vision)</p>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}

                                            {/*        <div className="title-hd-sm">*/}
                                            {/*            <h4>Cast</h4>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="mvcast-item">*/}
                                            {/*            <div className="cast-it">*/}
                                            {/*                <div className="cast-left">*/}
                                            {/*                    <img src="images/uploads/cast1.jpg" alt=""/>*/}
                                            {/*                    <a href="#">Robert Downey Jr.</a>*/}
                                            {/*                </div>*/}
                                            {/*                <p>... Robert Downey Jr.</p>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="cast-it">*/}
                                            {/*                <div className="cast-left">*/}
                                            {/*                    <img src="images/uploads/cast2.jpg" alt=""/>*/}
                                            {/*                    <a href="#">Chris Hemsworth</a>*/}
                                            {/*                </div>*/}
                                            {/*                <p>... Thor</p>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="cast-it">*/}
                                            {/*                <div className="cast-left">*/}
                                            {/*                    <img src="images/uploads/cast3.jpg" alt=""/>*/}
                                            {/*                    <a href="#">Mark Ruffalo</a>*/}
                                            {/*                </div>*/}
                                            {/*                <p>... Bruce Banner/ Hulk</p>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="cast-it">*/}
                                            {/*                <div className="cast-left">*/}
                                            {/*                    <img src="images/uploads/cast4.jpg" alt=""/>*/}
                                            {/*                    <a href="#">Chris Evans</a>*/}
                                            {/*                </div>*/}
                                            {/*                <p>... Steve Rogers/ Captain America</p>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="cast-it">*/}
                                            {/*                <div className="cast-left">*/}
                                            {/*                    <img src="images/uploads/cast5.jpg" alt=""/>*/}
                                            {/*                    <a href="#">Scarlett Johansson</a>*/}
                                            {/*                </div>*/}
                                            {/*                <p>... Natasha Romanoff/ Black Widow</p>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="cast-it">*/}
                                            {/*                <div className="cast-left">*/}
                                            {/*                    <img src="images/uploads/cast6.jpg" alt=""/>*/}
                                            {/*                    <a href="#">Jeremy Renner</a>*/}
                                            {/*                </div>*/}
                                            {/*                <p>... Clint Barton/ Hawkeye</p>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="cast-it">*/}
                                            {/*                <div className="cast-left">*/}
                                            {/*                    <img src="images/uploads/cast7.jpg" alt=""/>*/}
                                            {/*                    <a href="#">James Spader</a>*/}
                                            {/*                </div>*/}
                                            {/*                <p>... Ultron</p>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="cast-it">*/}
                                            {/*                <div className="cast-left">*/}
                                            {/*                    <img src="images/uploads/cast9.jpg" alt=""/>*/}
                                            {/*                    <a href="#">Don Cheadle</a>*/}
                                            {/*                </div>*/}
                                            {/*                <p>... James Rhodes/ War Machine</p>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}

                                            {/*        <div className="title-hd-sm">*/}
                                            {/*            <h4>Produced by</h4>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="mvcast-item">*/}
                                            {/*            <div className="cast-it">*/}
                                            {/*                <div className="cast-left">*/}
                                            {/*                    <h4>VA</h4>*/}
                                            {/*                    <a href="#">Victoria Alonso</a>*/}
                                            {/*                </div>*/}
                                            {/*                <p>... executive producer</p>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="cast-it">*/}
                                            {/*                <div className="cast-left">*/}
                                            {/*                    <h4>MB</h4>*/}
                                            {/*                    <a href="#">Mitchel Bell</a>*/}
                                            {/*                </div>*/}
                                            {/*                <p>... co-producer (as Mitch Bell)</p>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="cast-it">*/}
                                            {/*                <div className="cast-left">*/}
                                            {/*                    <h4>JC</h4>*/}
                                            {/*                    <a href="#">Jamie Christopher</a>*/}
                                            {/*                </div>*/}
                                            {/*                <p>... associate producer</p>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="cast-it">*/}
                                            {/*                <div className="cast-left">*/}
                                            {/*                    <h4>LD</h4>*/}
                                            {/*                    <a href="#">Louis D’Esposito</a>*/}
                                            {/*                </div>*/}
                                            {/*                <p>... executive producer</p>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="cast-it">*/}
                                            {/*                <div className="cast-left">*/}
                                            {/*                    <h4>JF</h4>*/}
                                            {/*                    <a href="#">Jon Favreau</a>*/}
                                            {/*                </div>*/}
                                            {/*                <p>... executive producer</p>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="cast-it">*/}
                                            {/*                <div className="cast-left">*/}
                                            {/*                    <h4>KF</h4>*/}
                                            {/*                    <a href="#">Kevin Feige</a>*/}
                                            {/*                </div>*/}
                                            {/*                <p>... producer</p>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="cast-it">*/}
                                            {/*                <div className="cast-left">*/}
                                            {/*                    <h4>AF</h4>*/}
                                            {/*                    <a href="#">Alan Fine</a>*/}
                                            {/*                </div>*/}
                                            {/*                <p>... executive producer</p>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="cast-it">*/}
                                            {/*                <div className="cast-left">*/}
                                            {/*                    <h4>JF</h4>*/}
                                            {/*                    <a href="#">Jeffrey Ford</a>*/}
                                            {/*                </div>*/}
                                            {/*                <p>... associate producer</p>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div id="media" className="tab">*/}
                                            {/*    <div className="row">*/}
                                            {/*        <div className="rv-hd">*/}
                                            {/*            <div>*/}
                                            {/*                <h3>Videos & Photos of</h3>*/}
                                            {/*                <h2>Skyfall: Quantum of Spectre</h2>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="title-hd-sm">*/}
                                            {/*            <h4>Photos <span> ({images.backdrops.length})</span></h4>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="mvsingle-item">*/}
                                            {/*            <a className="img-lightbox" data-fancybox-group="gallery"*/}
                                            {/*               href="images/uploads/image11.jpg"><img*/}
                                            {/*                src="images/uploads/image1.jpg" alt=""/></a>*/}
                                            {/*            <a className="img-lightbox" data-fancybox-group="gallery"*/}
                                            {/*               href="images/uploads/image21.jpg"><img*/}
                                            {/*                src="images/uploads/image2.jpg" alt=""/></a>*/}
                                            {/*            <a className="img-lightbox" data-fancybox-group="gallery"*/}
                                            {/*               href="images/uploads/image31.jpg"><img*/}
                                            {/*                src="images/uploads/image3.jpg" alt=""/></a>*/}
                                            {/*            <a className="img-lightbox" data-fancybox-group="gallery"*/}
                                            {/*               href="images/uploads/image41.jpg"><img*/}
                                            {/*                src="images/uploads/image4.jpg" alt=""/></a>*/}
                                            {/*            <a className="img-lightbox" data-fancybox-group="gallery"*/}
                                            {/*               href="images/uploads/image51.jpg"><img*/}
                                            {/*                src="images/uploads/image5.jpg" alt=""/></a>*/}
                                            {/*            <a className="img-lightbox" data-fancybox-group="gallery"*/}
                                            {/*               href="images/uploads/image61.jpg"><img*/}
                                            {/*                src="images/uploads/image6.jpg" alt=""/></a>*/}
                                            {/*            <a className="img-lightbox" data-fancybox-group="gallery"*/}
                                            {/*               href="images/uploads/image71.jpg"><img*/}
                                            {/*                src="images/uploads/image7.jpg" alt=""/></a>*/}
                                            {/*            <a className="img-lightbox" data-fancybox-group="gallery"*/}
                                            {/*               href="images/uploads/image81.jpg"><img*/}
                                            {/*                src="images/uploads/image8.jpg" alt=""/></a>*/}
                                            {/*            <a className="img-lightbox" data-fancybox-group="gallery"*/}
                                            {/*               href="images/uploads/image91.jpg"><img*/}
                                            {/*                src="images/uploads/image9.jpg" alt=""/></a>*/}
                                            {/*            <a className="img-lightbox" data-fancybox-group="gallery"*/}
                                            {/*               href="images/uploads/image101.jpg"><img*/}
                                            {/*                src="images/uploads/image10.jpg" alt=""/></a>*/}
                                            {/*            <a className="img-lightbox" data-fancybox-group="gallery"*/}
                                            {/*               href="images/uploads/image111.jpg"><img*/}
                                            {/*                src="images/uploads/image1-1.jpg" alt=""/></a>*/}
                                            {/*            <a className="img-lightbox" data-fancybox-group="gallery"*/}
                                            {/*               href="images/uploads/image121.jpg"><img*/}
                                            {/*                src="images/uploads/image12.jpg" alt=""/></a>*/}
                                            {/*            <a className="img-lightbox" data-fancybox-group="gallery"*/}
                                            {/*               href="images/uploads/image131.jpg"><img*/}
                                            {/*                src="images/uploads/image13.jpg" alt=""/></a>*/}
                                            {/*            <a className="img-lightbox" data-fancybox-group="gallery"*/}
                                            {/*               href="images/uploads/image141.jpg"><img*/}
                                            {/*                src="images/uploads/image14.jpg" alt=""/></a>*/}
                                            {/*            <a className="img-lightbox" data-fancybox-group="gallery"*/}
                                            {/*               href="images/uploads/image151.jpg"><img*/}
                                            {/*                src="images/uploads/image15.jpg" alt=""/></a>*/}
                                            {/*            <a className="img-lightbox" data-fancybox-group="gallery"*/}
                                            {/*               href="images/uploads/image161.jpg"><img*/}
                                            {/*                src="images/uploads/image16.jpg" alt=""/></a>*/}
                                            {/*            <a className="img-lightbox" data-fancybox-group="gallery"*/}
                                            {/*               href="images/uploads/image171.jpg"><img*/}
                                            {/*                src="images/uploads/image17.jpg" alt=""/></a>*/}
                                            {/*            <a className="img-lightbox" data-fancybox-group="gallery"*/}
                                            {/*               href="images/uploads/image181.jpg"><img*/}
                                            {/*                src="images/uploads/image18.jpg" alt=""/></a>*/}
                                            {/*            <a className="img-lightbox" data-fancybox-group="gallery"*/}
                                            {/*               href="images/uploads/image191.jpg"><img*/}
                                            {/*                src="images/uploads/image19.jpg" alt=""/></a>*/}
                                            {/*            <a className="img-lightbox" data-fancybox-group="gallery"*/}
                                            {/*               href="images/uploads/image201.jpg"><img*/}
                                            {/*                src="images/uploads/image20.jpg" alt=""/></a>*/}
                                            {/*            <a className="img-lightbox" data-fancybox-group="gallery"*/}
                                            {/*               href="images/uploads/image211.jpg"><img*/}
                                            {/*                src="images/uploads/image2-1.jpg" alt=""/></a>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            <div id="moviesrelated" className="tab">
                                                <div className="row">
                                                    <h3>Related Movies To</h3>
                                                    <h2>Skyfall: Quantum of Spectre</h2>
                                                    <div className="topbar-filter">
                                                        <p>Found <span>{recommendation.length} movies</span> in total</p>
                                                        <label>Sort by:</label>
                                                        <select>
                                                            <option value="popularity">Popularity Descending</option>
                                                            <option value="popularity">Popularity Ascending</option>
                                                            <option value="rating">Rating Descending</option>
                                                            <option value="rating">Rating Ascending</option>
                                                            <option value="date">Release date Descending</option>
                                                            <option value="date">Release date Ascending</option>
                                                        </select>
                                                    </div>
                                                    {recommendation.length > 0 ? recommendation.map((item,index)=>(
                                                        <div key={index} className="movie-item-style-2">
                                                            <img src={`https://image.tmdb.org/t/p/w342/${item.poster_path}`} alt=""/>
                                                            <div className="mv-item-infor">
                                                                <h6><a href="#">{item.title}</a></h6>
                                                                <p className="rate"><i
                                                                    className="ion-android-star"></i><span>{item.vote_count}</span> /5
                                                                </p>
                                                                <p className="describe">{SpliceByWord(item.overview,30)}</p>
                                                                <p className="run-time"> Run Time: 2h21’
                                                                    . <span>MMPA: PG-13 </span> . <span>Release: {BeautifyShortDate(new Date(item.release_date))}</span>
                                                                </p>
                                                                <p>Director: <a href="#">Joss Whedon</a></p>
                                                                <p>Stars: <a href="#">Robert Downey Jr.,</a> <a href="#">Chris
                                                                    Evans,</a> <a href="#"> Chris Hemsworth</a></p>
                                                            </div>
                                                        </div>
                                                    )):""}
                                                    <div className="topbar-filter">
                                                        <label>Movies per page:</label>
                                                        <select>
                                                            <option value="range">5 Movies</option>
                                                            <option value="saab">10 Movies</option>
                                                        </select>
                                                        <div className="pagination2">
                                                            <span>Page 1 of 2:</span>
                                                            <a className="active" href="#">1</a>
                                                            <a href="#">2</a>
                                                            <a href="#"><i className="ion-arrow-right-b"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MoviePage;

export const getServerSideProps = async ({req, res, resolvedUrl}) => {
    const id = resolvedUrl.split("/")[2]
    let movie
    try{
        movie = await getStream("movie",id)
    }catch (e) {
        movie = ""
        console.error(e)
    }

    return{
        props: {
            id,
            movie: movie?.data?.data,
            recommendation: movie?.data?.recommended_movies,
            cast: movie?.data?.cast,
            images: movie?.data?.images
        }
    }
}