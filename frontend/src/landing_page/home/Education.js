import React from 'react';

function Education() {
    return (
        <div className="row mt-5">

            <div className="col-6">
                <img
                    src="/media/images/index-education.svg"
                    alt="Education"
                    style={{ width: "70%" }}
                />
            </div>

            <div className="col-6">

                <h1 className="mb-3 fs-2">
                    Free and Open market Education
                </h1>

                <p>
                    Varsity, the largest online stock market education book
                    in the world covering everything from the basics to advanced
                    trading.
                    <br />

                    <a href="" style={{ textDecoration: "none" }}>
                        Varsity{" "}
                        <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                        ></i>
                    </a>
                </p>

                <p className="mt-5">
                    TradingQ&A, the most active trading and investing community
                    in India for all your market related queries.
                    <br />

                    <a href="" style={{ textDecoration: "none" }}>
                        TradingQ&A{" "}
                        <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                        ></i>
                    </a>
                </p>

            </div>
        </div>
    );
}

export default Education;