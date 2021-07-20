import React from "react";


const Stats = () => {
    return (
        <div className="container space-2 space-lg-3">
            <div className="row">
                <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="text-center">
                        <small className="text-cap text-primary mb-3">&mdash; Valuation methods </small>
                        <span className="d-block display-4 text-dark mb-3">500,000</span>
                        <p>Our valuation methods are based on more than 500,000 real transactions.</p>
                    </div>
                </div>

                <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="text-center">
                        <small className="text-cap text-primary mb-3">&mdash; Coverage</small>
                        <span className="d-block display-4 text-dark mb-3">75%</span>
                        <p>This represents over 75% of the UK property sales over the past 10 years.</p>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="text-center">
                        <small className="text-cap text-primary mb-3">&mdash; Advanced algorithm</small>
                        <span className="d-block display-4 text-dark mb-3">125,000</span>
                        <p>Our algorithms are updated by data from over 125,000 property sales every year.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Stats;