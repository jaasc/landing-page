import React from "react"
import confetti from "./images/image-confetti.jpg"
import curency from "./images/image-currency.jpg"
import plane from "./images/image-plane.jpg"
import restaurant from "./images/image-restaurant.jpg"

export default function Articles(){
    return(
        <div className="artContainer">
            <h2>Latest Articles</h2>    
            <div className="articleList">
                <div className="article-holder">
                    <img src={curency} alt="currency"/>
                    <div className="artDetails">
                        <h5>By Claire Robinson</h5>
                        <h3>Receive money in any currency with no fees</h3>
                        <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single…</p>
                    </div>
                </div>
                
                <div className="article-holder">
                    <img src={restaurant} alt="restaurant"/>
                    <div className="artDetails">
                        <h5>By Wilson Hutton</h5>
                        <h3>Treat yourself without worrying about money</h3>
                        <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you…</p>
                    </div>  
                </div>           

                <div className="article-holder">
                    <img src={plane} alt="plane"/>
                    <div className="artDetails">
                        <h5>By Wilson Hutton</h5>
                        <h3>Take your Easybank card wherever you go</h3>
                        <p>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you…</p>
                    </div>
                </div>
                
                <div className="article-holder">
                    <img src={confetti} alt="confetti"/>
                    <div className="artDetails">
                        <h5>By Claire Robinson</h5>
                        <h3>Our invite-only Beta accounts are now live!</h3>
                        <p>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}