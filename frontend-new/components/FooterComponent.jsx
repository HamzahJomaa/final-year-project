import React from 'react';

const FooterComponent = () => {


    let profile

    if (typeof window !== "undefined") {
        profile = localStorage.getItem("id")
    }

    return (
        <footer className="ht-footer">
            <div className="container">
                <div className="flex-parent-ft">
                    <div className="flex-child-ft item1">
                        <a href="index.html"><img className="logo" src="/images/logo1.png" alt=""/></a>
                    </div>
                    <div className="resources">
                        <div className="flex-child-ft item2">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="/movies">Movies</a></li>
                                <li><a href="/series">Series</a></li>
                            </ul>
                        </div>
                        {profile && (
                            <div className="flex-child-ft item4">
                                <h4>Account</h4>
                                <ul>
                                    <li><a href="/profile">My Account</a></li>
                                    <li><a href="/profile/watchlistmovie">Watchlist</a></li>
                                    <li><a href="/profile/ratemovies">Ratings</a></li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="flex-child-ft item5">
                        <h4>Newsletter</h4>
                        <p>Subscribe to our newsletter system now <br/> to get latest news from us.</p>
                        <form action="#">
                            <input type="text" placeholder="Enter your email..."/>
                        </form>
                        <a href="#" className="btn">Subscribe now <i className="ion-ios-arrow-forward"></i></a>
                    </div>
                </div>
            </div>
            <div className="ft-copyright">
                <div className="ft-left">
                    <p>© 2017 Blockbuster. All Rights Reserved. Designed by leehari.</p>
                </div>
                <div className="backtotop">
                    <p><a href="#" id="back-to-top">Back to top <i className="ion-ios-arrow-thin-up"></i></a></p>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;