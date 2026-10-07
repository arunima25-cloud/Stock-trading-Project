import React from 'react';
function Awards(){
    return (
        <div className = "container ">
            <div className = "row">
                <div className = "col-lg-6 col-sm-12 p-5">
                    <img src = "/media/images/trophy.png"></img>

                </div>
                <div className = "col-lg-6 col-sm-12 p-5 mt-3">
                    <h1>Largest stock broker in India</h1>
                    <p className ="mb-5">2+ million Zerodha clients contribute to over 15% of all
                        retail order volumes in India daily by trading and investing in:
                    </p>
                    <div className = "row">
                        <div className = "col-6">
                             <ul>
                        <li>
                           <p>Futures and Options</p>
                        </li>
                        <li>
                            <p>Commodity Derivatives</p>
                        </li>
                        <li>
                            <p>Currency Derivatives</p>
                            
                        </li>
                        
                    </ul>
                        </div>
                        <div className = "col-6">
                             <ul>
                        <li>
                           <p>Stocks and IPO's</p>
                        </li>
                        <li>
                            <p>Direct mutual funds</p>
                        </li>
                        <li>
                            <p>Bonds and Government Securities</p>
                            
                        </li>
                        
                    </ul>
                        </div>
                    </div>
                    <img src = "/media/images/press-logos.png"  alt= "Press Logos" style = {{width: "80%"}}></img>
                   

                </div>

            </div>

        </div>
    );
}

export default Awards;