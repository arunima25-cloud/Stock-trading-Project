import React from "react";

function Hero() {
    return (
        <div className="container">

            {/* Heading */}
            <div className="row p-5 mt-5 text-center">
                <h1>Pricing</h1>

                <p className="text-muted fs-5 mt-3">
                    Free equity investments and flat F&O trades
                </p>
            </div>

            {/* Three pricing sections */}
            <div className="row text-center">

                <div className="col-4 p-5">
                    <img
                        src="/media/images/pricing-eq.svg"
                        style={{ width: "150px" }}
                    />

                    <h2 className="mt-5">
                        Free equity delivery
                    </h2>

                    <p className="text-muted mt-4">
                        All equity delivery investments (NSE, BSE),
                        are absolutely free — ₹0 brokerage.
                    </p>
                </div>


                <div className="col-4 p-5">
                    <img
                        src="/media/images/other-trades.svg"
                        style={{ width: "150px" }}
                    />

                    <h2 className="mt-5">
                        Intraday and F&O trades
                    </h2>

                    <p className="text-muted mt-4">
                        Flat ₹20 or 0.03% (whichever is lower) per
                        executed order on intraday trades across
                        equity, currency, and commodity trades.
                        Flat ₹20 on all option trades.
                    </p>
                </div>


                <div className="col-4 p-5">
                    <img
                        src="/media/images/pricing-eq.svg"
                        style={{ width: "150px" }}
                    />

                    <h2 className="mt-5">
                        Free direct MF
                    </h2>

                    <p className="text-muted mt-4">
                        All direct mutual fund investments are
                        absolutely free — ₹0 commissions & DP charges.
                    </p>
                </div>

            </div>

        </div>
    );
}

export default Hero;