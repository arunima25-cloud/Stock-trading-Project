import React from "react";

function LeftSection({imageURL, productName, productDescription,tryDemo,
    learnMore, googlePlay, appStore,
}){
    return(
        <div className = "container mt-5">
            <div className = "row p-5 align-items-center">
                <div className = "col-6 mt-5">
                    <img src = {imageURL} style = {{width: "100%"}}></img>

                </div>
                
                <div className = "col-6">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                    <a href = {tryDemo}>Try Demo</a>
                    <a href = {learnMore} style = {{marginLeft: "50px"}}>Learn More</a>
                    </div>

                    <div className = "mt-3">
                    <a href = {googlePlay}><img src = "media/images/google-play-badge.svg"></img></a>
                    <a href = {appStore} style = {{marginLeft: "20px"}}><img src = "media/images/appstore-badge.svg"></img></a>
                    </div>
                    
                    

                </div>

            </div>
        </div>

    );
}

export default LeftSection;