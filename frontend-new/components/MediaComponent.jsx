import React from 'react';
import ImageComponent from "../helpers/ImageComponent";

const MediaComponent = ({images,title}) => {
    return (
        <div id="media" className="tab">
            <div className="row">
                <div className="rv-hd">
                    <div>
                        <h3>Videos & Photos of</h3>
                        <h2>{title}</h2>
                    </div>
                </div>
                <div className="title-hd-sm">
                    <h4>Photos <span> ({images.backdrops.length})</span></h4>
                </div>
                <div className="mvsingle-item">
                    {images?.backdrops?.length > 0 ? images?.backdrops?.map((element, index) => (
                        <a key={index} className="img-lightbox" data-fancybox-group="gallery"
                           href={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${element.file_path}`}>
                            <ImageComponent src={`https://image.tmdb.org/t/p/w342/${element?.file_path}`} alt="I'm a lazy image"
                                            width="100"
                                            loading={"eager"}
                                            height="50"
                                            placeholder="blur" blurDataURL="/images/owl.video.play.png" /></a>
                    )) : ""}
                </div>
            </div>
        </div>
    );
};

export default MediaComponent;