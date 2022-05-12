import React from "react"
import online from "./images/icon-online.svg"
import budget from "./images/icon-budgeting.svg"
import onboarding from "./images/icon-onboarding.svg"
import api from "./images/icon-api.svg"

export default function Features(){
    return(
        <div className="featContainer">
           <h2>Why choose Easybank?</h2>  
           <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before. </p>      
            
            <div className="features">
                <div className="feature-holder">
                    <img src={online} alt="online banking"/>
                    <h3>Online Banking</h3>
                    <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                </div>
            
                <div className="feature-holder">
                    <img src={budget} alt="simple budgeting"/>
                    <h3>Simple Budgeting</h3>
                    <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                </div>
            
                <div className="feature-holder">
                    <img src={onboarding} alt="fast onboarding"/>
                    <h3>Fast Onboarding</h3>
                    <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away. </p>
                </div>
            
                <div className="feature-holder">
                    <img src={api} alt="open API"/>
                    <h3>Open API</h3>
                    <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                </div>
            </div>
        </div>
    )
}