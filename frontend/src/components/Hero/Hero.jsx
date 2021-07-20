import React from "react";


const Hero = () => {
    return (
        <div className="position-relative overflow-hidden space-top-md-3">
            <div
                className="container position-relative space-top-2 space-top-md-0 space-top-lg-3 space-bottom-2 space-bottom-md-3 space-bottom-xl-5">
                <div className="row position-relative z-index-2 mt-md-n5">
                    <div className="col-md-8 mb-7 mb-md-0">
                        {/* <!-- Title --> */}
                        <div className="w-md-75 mb-7">
                            <h1 className="display-4">Discover a place you'll
                                <span className="text-primary text-highlight-warning">
                  <span className="js-text-animation"
                        data-hs-typed-options='{
                          "strings": ["love to live", "enjoy living"],
                          "typeSpeed": 90,
                          "loop": true,
                          "backSpeed": 30,
                          "backDelay": 2500
                        }'></span>
                </span>
                            </h1>
                        </div>
                        {/* <!-- End Title --> */}

                        {/* <!-- Card --> */}
                        <div className="card p-2 mb-3">
                            {/* <!-- Input Group --> */}
                            <div className="form-row">
                                <div className="col-sm mb-2 mb-sm-0">
                                    <div className="input-group input-group-merge input-group-borderless">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-search"></i>
                                            </div>
                                        </div>

                                        <input type="text" className="form-control" name="buyAddress"
                                               placeholder="Enter location" aria-label="Enter location"/>
                                    </div>
                                </div>

                                <div className="col-sm-auto">
                                    <button type="button" className="btn btn-block btn-primary px-5">Search</button>
                                </div>
                            </div>
                            {/* <!-- End Input Group --> */}
                        </div>
                        {/* <!-- End Card --> */}

                        <small className="form-text">Search through over 125,000 listings</small>
                    </div>
                </div>
                {/* <!-- End Row --> */}

                <div className="col-md-6 position-md-absolute top-0 right-0">
                    <img className="img-fluid" src="https://htmlstream.com/front/assets/img/900x900/img20.jpg"
                         alt="Image Description"/>

                    <figure className="max-w-15rem w-100 position-absolute bottom-0 right-0 z-index-n1">
                        <div className="mb-n7 mr-n7">
                            <img className="img-fluid"
                                 src="https://htmlstream.com/front/assets/svg/components/dots-1.svg"
                                 alt="Image Description"/>
                        </div>
                    </figure>
                </div>
            </div>

            <div className="col-md-10 position-absolute top-0 left-0 z-index-n1 gradient-y-three-sm-primary h-100"
                 style={{backgroundSize: "calc(1000px + (100vw - 1000px) / 2)"}}></div>
        </div>
    )
}


export default Hero;