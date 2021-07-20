import React from "react";


const Property = ({offerNumber, bgImg, location, price}) => {
    return (
        <div className="overflow-hidden rounded-lg-pseudo">
            <a className="card shadow-none min-h-270rem bg-img-hero gradient-y-overlay-lg-dark transition-zoom-hover"
               style={{backgroundImage: bgImg }}
               href="property-grid.html">
                <div className="position-absolute top-0 left-0 p-4">
                    <span className="badge badge-light">{offerNumber} offers</span>
                </div>
                <div className="position-absolute right-0 bottom-0 left-0 p-4">
                    <h3 className="text-white mb-0">{location}</h3>
                    <span className="d-block text-white">Prices from {price}</span>
                </div>
            </a>
        </div>
    )
}


const Properties = () => {
    return (
        <div className="container space-bottom-2 space-bottom-lg-3">
            {/* <!-- Title --> */}
            <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-5 mb-md-7">
                <h2>Browse properties by city in the UK</h2>
                <p>Take a deep dive and browse original neighborhood photos, drone footage, resident reviews and local
                    insights to see if the homes for sale are right for you.</p>
            </div>
            {/* <!-- End Title --> */}

            {/* <!-- Nav --> */}
            <div className="d-flex justify-content-center">
                <ul className="nav nav-segment mb-5" id="houseHeroTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="for-sale-tab" data-toggle="tab" href="#for-sale" role="tab">For
                            sale</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="for-rent-tab" data-toggle="tab" href="#for-rent" role="tab">For
                            rent</a>
                    </li>
                </ul>
            </div>
            {/* <!-- End Nav --> */}

            {/* <!-- Tab Content --> */}
            <div className="tab-content" id="houseHeroTabContent">
                <div className="tab-pane fade show active" id="for-sale" role="tabpanel" aria-labelledby="for-sale-tab">
                    {/* <!-- Slick Carousel --> */}
                    <div className="row mx-n2">
                        <div className="col-sm-6 col-lg-4 px-2 mb-3">
                            <Property
                                bgImg={"url(https://htmlstream.com/front/assets/img/480x320/img28.jpg)"}
                                offerNumber={3521}
                                location={"London"}
                                price={"&#163;5,490,000"}
                            />
                        </div>

                        <div className="col-sm-6 col-lg-4 px-2 mb-3">
                            <Property
                                bgImg={"url(https://htmlstream.com/front/assets/img/480x320/img29.jpg)"}
                                offerNumber={4659}
                                location={"Oxford"}
                                price={'&#163;3,820,000'}
                            />
                        </div>

                        <div className="col-sm-6 col-lg-4 px-2 mb-3">
                            <Property
                                bgImg={"url(https://htmlstream.com/front/assets/img/480x320/img11.jpg)"}
                                offerNumber={2471}
                                location={"Edinburgh"}
                                price={'&#163;3,371,000'}
                            />
                        </div>

                        <div className="col-sm-6 col-lg-4 px-2 mb-3">
                            <Property
                                bgImg={"url(https://htmlstream.com/front/assets/img/480x320/img10.jpg)"}
                                offerNumber={5523}
                                location={"Newcastle"}
                                price={'&#163;2,588,000'}
                            />
                        </div>

                        <div className="col-sm-6 col-lg-4 px-2 mb-3">
                            <Property
                                bgImg={"url(https://htmlstream.com/front/assets/img/480x320/img9.jpg)"}
                                offerNumber={939}
                                location={"Liverpool"}
                                price={'&#163;1,318,000'}
                            />
                        </div>

                        <div className="col-sm-6 col-lg-4 px-2 mb-3">
                            <Property
                                bgImg={"url(https://htmlstream.com/front/assets/img/480x320/img8.jpg)"}
                                offerNumber={364}
                                location={"Bristol"}
                                price={'&#163;1,457,000'}
                            />
                        </div>
                    </div>
                    {/* <!-- End Slick Carousel --> */}
                </div>

                <div className="tab-pane fade" id="for-rent" role="tabpanel" aria-labelledby="for-rent-tab">
                    {/* <!-- Slick Carousel --> */}
                    <div className="row">
                        <div className="col-sm-6 col-lg-4 px-2 mb-3">
                            <Property
                                bgImg={"url(https://htmlstream.com/front/assets/img/480x320/img11.jpg)"}
                                offerNumber={2471}
                                location={"Edinburgh"}
                                price={'Edinburgh'}
                            />
                        </div>

                        <div className="col-sm-6 col-lg-4 px-2 mb-3">
                            <Property
                                bgImg={"url(https://htmlstream.com/front/assets/img/480x320/img11.jpg)"}
                                offerNumber={2471}
                                location={"Edinburgh"}
                                price={'Edinburgh'}
                            />
                        </div>

                        <div className="col-sm-6 col-lg-4 px-2 mb-3">
                            <Property
                                bgImg={"url(https://htmlstream.com/front/assets/img/480x320/img11.jpg)"}
                                offerNumber={2471}
                                location={"Edinburgh"}
                                price={'Edinburgh'}
                            />
                        </div>

                        <div className="col-sm-6 col-lg-4 px-2 mb-3">
                            <Property
                                bgImg={"url(https://htmlstream.com/front/assets/img/480x320/img11.jpg)"}
                                offerNumber={2471}
                                location={"Edinburgh"}
                                price={'Edinburgh'}
                            />
                        </div>

                        <div className="col-sm-6 col-lg-4 px-2 mb-3">
                            <Property
                                bgImg={"url(https://htmlstream.com/front/assets/img/480x320/img11.jpg)"}
                                offerNumber={2471}
                                location={"Edinburgh"}
                                price={'Edinburgh'}
                            />
                        </div>

                        <div className="col-sm-6 col-lg-4 px-2 mb-3">
                           <Property
                                bgImg={"url(https://htmlstream.com/front/assets/img/480x320/img11.jpg)"}
                                offerNumber={2471}
                                location={"Edinburgh"}
                                price={'Edinburgh'}
                            />
                        </div>
                    </div>
                    {/* <!-- End Slick Carousel --> */}
                </div>
            </div>
            {/* <!-- End Tab Content --> */}
        </div>
    )
}

export default Properties;