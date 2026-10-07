import React from "react";

function RightSection({imageURL, productName, productDescription,
    learnMore,}){
    
        return(
        <div className = "container mt-5">
            <div className = "row p-5 align-items-center">
                <div className = "col-6">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                    
                    <a href = {learnMore} >Learn More</a>
                    </div>
                </div>
                <div className = "col-6 mt-5">
                    <img src = {imageURL} style = {{width: "100%"}}></img>

                </div>
                

            </div>
        </div>

    );
}

export default RightSection;