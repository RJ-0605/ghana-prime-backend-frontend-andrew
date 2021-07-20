import React from "react";


const Testimonials = () => {
    return (
        <div className="overflow-hidden space-bottom-2 space-bottom-lg-3">
            {/* <!-- Title --> */}
            <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-7">
                <h2>Reviews</h2>
                <p>Over 40,000 happy customers. Be the next one.</p>
            </div>
            {/* <!-- End Title --> */}

            <div className="container">
                <div className="row justify-content-center align-items-md-center mb-7">
                    <div className="col-11 col-md-6 col-lg-4 z-index-2 mb-5 mb-md-0 mr-md-n9">
                        {/* <!-- Card --> */}
                        <div className="card">
                            <div className="card-body">
                                {/* <!-- SVG Quote --> */}
                                <figure className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                         x="0px" y="0px" width="40px" height="40px"
                                         viewBox="0 0 8 8" style={{enableBackground: "new 0 0 8 8"}}
                                         xmlSpace="preserve">
                                        <path fill="#377DFF" d="M3,1.3C2,1.7,1.2,2.7,1.2,3.6c0,0.2,0,0.4,0.1,0.5c0.2-0.2,0.5-0.3,0.9-0.3c0.8,0,1.5,0.6,1.5,1.5c0,0.9-0.7,1.5-1.5,1.5
                                          C1.4,6.9,1,6.6,0.7,6.1C0.4,5.6,0.3,4.9,0.3,4.5c0-1.6,0.8-2.9,2.5-3.7L3,1.3z M7.1,1.3c-1,0.4-1.8,1.4-1.8,2.3
                                          c0,0.2,0,0.4,0.1,0.5c0.2-0.2,0.5-0.3,0.9-0.3c0.8,0,1.5,0.6,1.5,1.5c0,0.9-0.7,1.5-1.5,1.5c-0.7,0-1.1-0.3-1.4-0.8
                                          C4.4,5.6,4.4,4.9,4.4,4.5c0-1.6,0.8-2.9,2.5-3.7L7.1,1.3z"/>
                                    </svg>
                                </figure>
                                {/* <!-- End SVG Quote --> */}

                                <blockquote className="blockquote mb-4">With Front Real Estate we can be self-reliant,
                                    like cooking for ourselves rather than eating out every night. You feel like part of
                                    the community rather than a visitor.
                                </blockquote>

                                {/* <!-- Author --> */}
                                <div className="media">
                                    <div className="avatar avatar-circle mr-3">
                                        <img className="avatar-img"
                                             src="https://htmlstream.com/front/assets/img/100x100/img1.jpg"
                                             alt="Image Description"/>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="mb-0">Christina Kray</h4>
                                        <small className="d-block mb-1">Amsterdam, Netherlands</small>

                                        <div className="d-flex">
                                            <img className="mr-1"
                                                 src="https://htmlstream.com/front/assets/svg/illustrations/star.svg"
                                                 alt="Review rating" width="12"/>
                                            <img className="mr-1"
                                                 src="https://htmlstream.com/front/assets/svg/illustrations/star.svg"
                                                 alt="Review rating" width="12"/>
                                            <img className="mr-1"
                                                 src="https://htmlstream.com/front/assets/svg/illustrations/star.svg"
                                                 alt="Review rating" width="12"/>
                                            <img className="mr-1"
                                                 src="https://htmlstream.com/front/assets/svg/illustrations/star.svg"
                                                 alt="Review rating" width="12"/>
                                            <img className="mr-1"
                                                 src="https://htmlstream.com/front/assets/svg/illustrations/star.svg"
                                                 alt="Review rating" width="12"/>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Author --> */}
                            </div>
                        </div>
                        {/* <!-- End Card --> */}
                    </div>

                    <div className="col-md-6 mt-n9 mt-md-0">
                        <img className="img-fluid" src="https://htmlstream.com/front/assets/img/900x900/img21.jpg"
                             alt="Image Description"/>
                    </div>
                </div>

                <div className="text-center">
                    <h3>See what other people are saying</h3>

                    <div className="d-flex justify-content-center align-items-center mb-4">
                        <img className="mr-1" src="https://htmlstream.com/front/assets/svg/illustrations/star.svg"
                             alt="Review rating" width="12"/>
                        <img className="mr-1" src="https://htmlstream.com/front/assets/svg/illustrations/star.svg"
                             alt="Review rating" width="12"/>
                        <img className="mr-1"
                             src="https://htmlstream.com/front/assets/svg/illustrations/star.svg"
                             alt="Review rating" width="12"/>
                        <img className="mr-1"
                             src="https://htmlstream.com/front/assets/svg/illustrations/star.svg"
                             alt="Review rating" width="12"/>
                        <img className="mr-1"
                             src="https://htmlstream.com/front/assets/svg/illustrations/star.svg"
                             alt="Review rating" width="12"/>

                        <span className="h4 ml-2 mb-0">4.85 / 5.0 <small
                            className="text-body">(2,594)</small></span>
                    </div>

                    <a className="btn btn-primary px-5" href="#">Read more reviews <i
                        className="fas fa-angle-right ml-1"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;