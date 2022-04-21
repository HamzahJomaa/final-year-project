import React from 'react';

const CastComponent = ({cast,director,title}) => {
    return (<div id="cast" className="tab">
            <div className="row">
                <h3>Cast & Crew of</h3>
                <h2>{title}</h2>

                <div className="title-hd-sm">
                    <h4>Directors & Credit Writers</h4>
                </div>
                <div className="mvcast-item">
                    <div className="cast-it">
                        <div className="cast-left">
                            <h4>JW</h4>
                            <a href="#">{director?.name}</a>
                        </div>
                        <p>... Director</p>
                    </div>
                </div>
                <div className="title-hd-sm">
                    <h4>Cast</h4>
                </div>

                <div className="mvcast-item">
                    {cast.cast.length > 0 ? cast.cast.map((element, index) =>
                        (<div className="cast-it" key={index}>
                            <div className="cast-left">
                                <img width={40} src={`https://www.themoviedb.org/t/p/w92${element.profile_path}`} alt="" />
                                <a href="#">{element.name}</a>
                            </div>
                            <p>{element.character}</p>
                        </div>)
                    ) : ""}
                </div>

                <div className="title-hd-sm">
                    <h4>Directors & Credit Writers</h4>
                </div>
                <div className="mvcast-item">
                    {cast.crew.length > 0 ? cast.crew.map((element, index) =>
                        <div className="cast-it" key={index}>
                            <div className="cast-left">
                                <img width={40} src={`https://www.themoviedb.org/t/p/w92${element.profile_path}`} alt="" />
                                <a href="#">{element.name}</a>
                            </div>
                            <p>{element.department}</p>
                        </div>
                    ) : ""}
                </div>
            </div>
        </div>
    );
};

export default CastComponent;