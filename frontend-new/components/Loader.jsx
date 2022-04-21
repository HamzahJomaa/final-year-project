import React from 'react';

const Loader = () => {
    return (
        <div id="preloader">
            <img className="logo" src="images/logo1.png" alt="" width="119" height="58"/>
            <div id="status">
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Loader;