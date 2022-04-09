import React, {useState} from 'react';
import {getUserReviews} from "../../api/Main"
import ImageComponent from "../../helpers/ImageComponent";

const RateComponent = ({id,t}) => {

    const [profileId,setProfileId] = useState(id)
    const [token,setToken] = useState(t)
    const [reviews,setReviews] = useState([])

    useState( async ()=>{
        console.log({id: profileId,token})
        try {
            const reviewsAPI = await getUserReviews({id: profileId,token})
            setReviews(reviewsAPI.data.statusMessage)
        }catch (e) {
            console.error(e)
        }
    },[])

    return (
        <div className="col-md-9 col-sm-12 col-xs-12">
            <div className="topbar-filter">
                <p>Found <span>3 rates</span> in total</p>
                <label>Sort by:</label>
                <select>
                    <option value="range">-- Choose option --</option>
                    <option value="saab">-- Choose option 2--</option>
                </select>
            </div>
            {reviews.length > 0 && reviews.map((item,index)=>(
                <div key={index} className="movie-item-style-2 userrate">
                    <ImageComponent src={`https://image.tmdb.org/t/p/w342/${item?.on?.poster_path}`} alt="I'm a lazy image"
                                    width="500"
                                    loading={"eager"}
                                    height="800"
                                    placeholder="blur" blurDataURL="/images/owl.video.play.png" />
                    <div className="mv-item-infor">
                        <h6><a href="#">oblivion <span>(2012)</span></a></h6>
                        <p className="time sm-text">your rate:</p>
                        <p className="rate"><i className="ion-android-star"></i><span>9.0</span> /10</p>
                        <p className="time sm-text">your reviews:</p>
                        <h6>Best Marvel movie in my opinion</h6>
                        <p className="time sm">02 April 2017</p>
                        <p>“This is by far one of my favorite movies from the MCU. The introduction of new Characters
                            both good and bad also makes the movie more exciting. giving the characters more of a back
                            story can also help audiences relate more to different characters better, and it connects a
                            bond between the audience and actors or characters. Having seen the movie three times does
                            not bother me here as it is as thrilling and exciting every time I am watching it. In other
                            words, the movie is by far better than previous movies (and I do love everything Marvel),
                            the plotting is splendid (they really do out do themselves in each film, there are no
                            problems watching it more than once.”</p>
                    </div>
                </div>
            ))}

            <div className="topbar-filter">
                <label>Movies per page:</label>
                <select>
                    <option value="range">20 Movies</option>
                    <option value="saab">10 Movies</option>
                </select>
                <div className="pagination2">
                    <span>Page 1 of 1:</span>
                    <a className="active" href="#">1</a>
                    <a href="#"><i className="ion-arrow-right-b"></i></a>
                </div>
            </div>
        </div>
    );
};

export default RateComponent;