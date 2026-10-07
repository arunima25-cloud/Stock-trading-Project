import React from "react";

function Universe() {
    return (
        <div className="container text-center mt-5">

            <h1>The Zerodha Universe</h1>

            <p>
                Extend your trading and investment experience even
                further with our partner platforms
            </p>

            <div className="row mt-5">

                <div className="col-4 p-3">
                    <img
                        src="media/images/zerodhaFund.png"
                        style={{ height: "100px", width: "auto" }}
                    />
                    <p className="text-small text-muted mt-3">
                        Our asset management venture that is creating simple
                        and transparent index funds to help you save for your goals.
                    </p>
                </div>

                <div className="col-4 p-3">
                    <img
                        src="media/images/sensibull.png"
                        style={{ height: "100px", width: "auto" }}
                    />
                    <p className="text-small text-muted mt-3">
                        Options trading platform that lets you create strategies,
                        analyze positions, and examine data points like open interest,
                        FII/DII, and more.
                    </p>
                </div>

                <div className="col-4 p-3">
                    <img
                        src="media/images/tijori.png"
                        style={{ height: "100px", width: "auto" }}
                    />
                    <p className="text-small text-muted mt-3">
                        Investment research platform that offers detailed insights
                        on stocks, sectors, supply chains, and more.
                    </p>
                </div>


                <div className="col-4 p-3 mt-4">
                    <img
                        src="media/images/streak.png"
                        style={{ height: "100px", width: "auto" }}
                    />
                    <p className="text-small text-muted mt-3">
                        Systematic trading platform that allows you to create
                        and backtest strategies without coding.
                    </p>
                </div>

                <div className="col-4 p-3 mt-4">
                    <img
                        src="media/images/smallcase.png"
                        style={{ height: "100px", width: "auto" }}
                    />
                    <p className="text-small text-muted mt-3">
                        Thematic investing platform that helps you invest in
                        diversified baskets of stocks or ETFs.
                    </p>
                </div>

                <div className="col-4 p-3 mt-4">
                    <img
                        src="media/images/ditto.png"
                        style={{ height: "100px", width: "auto" }}
                    />
                    <p className="text-small text-muted mt-3">
                        Personalized advice on life and health insurance.
                        No spam and no mis-selling.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Universe;