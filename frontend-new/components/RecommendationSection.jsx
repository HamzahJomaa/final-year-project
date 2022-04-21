import React from "react"
import {SpliceByWord, BeautifyShortDate, to_slug} from "../helpers/contenthelper";


const RecommendationComponent = ({ recommendation, title, type }) => {
    return (
        <div id="moviesrelated" className="tab">
            <div className="row">
                <h3>Related {type} to</h3>
                <h2>{title}</h2>
                {recommendation.length > 0 ? recommendation.map((item, index) => (
                    <div key={index} className="movie-item-style-2">
                        <img src={`https://image.tmdb.org/t/p/w342/${item.poster_path}`} alt="" />
                        <div className="mv-item-infor">
                            <h6><a href={`/${type}/${item?.tmdb}/${to_slug(item?.title)}`} > {item.title}</a></h6>
                            <p className="rate"><i className="ion-android-star"></i><span>{item.vote_count}</span> /5</p>
                            <p className="describe">{SpliceByWord(item.overview, 30)}</p>
                            <p className="run-time"><span>Release: {BeautifyShortDate(new Date(item.release_date))}</span></p>
                        </div>
                    </div>
                )) : ""}
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
    )
}
export default RecommendationComponent
