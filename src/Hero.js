import React from "react"
import hero from "./images/image-mockups.png"

export default function Hero(){
    return(
        <div className="heroContainer">
            <div className="hero-title">
                <h1>Next generation digital banking</h1>
                <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <button>Request Invite</button>
            </div>
            <div className="heroImg">
                <img src={hero} alt=""/>
            </div>
        </div>
    )
}