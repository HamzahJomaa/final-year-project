import React from 'react';

const HeroComponent = ({type,title,location,bgimg}) => {
    return (
        <div className={`hero ${type}`} style={{background:`url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${bgimg}')`}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="hero-ct">
                            <h1>{title}</h1>
                            <ul className="breadcumb">
                                {location ? location.map((element,index)=>{
                                    if (index !== location.length - 1){
                                        return <li className="active"><a href="#">{element}</a><span className="ion-ios-arrow-right"></span></li>
                                    }
                                }):""}
                                <li>{location && location[location.length - 1]}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};



export default HeroComponent;