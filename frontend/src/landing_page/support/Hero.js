import React from "react";

function Hero() {
    return (
        <section className="container-fluid" id="supportHero">

            <div className="row p-5" id="supportWrapper">

                <div className="col-6">
                    <h4>Support Portal</h4>
                </div>

                <div className="col-6 text-end">
                    <a href="">Track Tickets</a>
                </div>

            </div>

            <div className="row" id="supportContent">

                <div className="col-6">

                    <h1>
                        Search for an answer or browse help topics
                        to create a ticket
                    </h1>

                    <div id="searchBox">
                        <input
                            placeholder="Eg. how do I activate F&O.."
                        />
                        <button>
                            Search
                        </button>
                    </div>

                    <div id="supportLinks">
                        <a href="">Track account opening</a>
                        <a href="">Track segment activation</a>
                        <a href="">Track margin activation</a>
                        <a href="">Kite user manual</a>
                    </div>

                </div>

                <div className="col-6" id="featured">

                    <h1>Featured</h1>

                    <div id="featuredBox">
                        <ol>
                            <li>
                                <a href="">
                                    Current Takeovers and Delisting - January 2024
                                </a>
                            </li>

                            <li>
                                <a href="">
                                    Latest Intraday leverages - MIS & CO
                                </a>
                            </li>
                        </ol>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;