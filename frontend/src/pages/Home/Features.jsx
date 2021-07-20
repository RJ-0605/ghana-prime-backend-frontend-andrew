import React from "react"


const Features = () => {
    return (
        <div className="position-relative">
            <div className="container space-lg-3">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-9 mb-7 mb-md-0">
                        <div className="w-md-60 mb-7">
                            <h2 className="h1">Front helps you make better property decisions</h2>
                            <p>Front has England's largest collection of street and suburb reviews, empowering you to
                                find the right area for you to move to. With tens of thousands of local community topics
                                and discussions, find the answers to all your questions about an area, or ask the
                                locals.</p>
                        </div>

                        <div className="row">
                            <div className="col-md-4 mb-3 mb-md-0">
                                {/* <!-- Card --> */}
                                <div className="card h-100">
                                    <div className="card-body">
                                        <figure className="max-w-8rem mb-3">
                                            <img className="img-fluid"
                                                 src="https://htmlstream.com/front/assets/svg/icons/icon-13.svg"
                                                 alt="SVG" />
                                        </figure>
                                        <h4>Find homes for sale</h4>
                                        <p>Over 1 million+ homes for sale available on the website.</p>
                                        <a href="#">Properties for sale <i
                                            className="fas fa-angle-right align-middle ml-1"></i></a>
                                    </div>
                                </div>
                                {/* <!-- End Card --> */}
                            </div>

                            <div className="col-md-4 mb-3 mb-md-0">
                                {/* <!-- Card --> */}
                                <div className="card h-100">
                                    <div className="card-body">
                                        <figure className="max-w-8rem mb-3">
                                            <img className="img-fluid"
                                                 src="https://htmlstream.com/front/assets/svg/icons/icon-1.svg"
                                                 alt="SVG" />
                                        </figure>
                                        <h4>Find rental properties</h4>
                                        <p>Fina a home or apartment with 35+ filters and custom keyword search.</p>
                                        <a href="#">Properties for rent <i
                                            className="fas fa-angle-right align-middle ml-1"></i></a>
                                    </div>
                                </div>
                                {/* <!-- End Card --> */}
                            </div>

                            <div className="col-md-4">
                                {/* <!-- Card --> */}
                                <div className="card h-100">
                                    <div className="card-body">
                                        <figure className="max-w-8rem mb-3">
                                            <img className="img-fluid"
                                                 src="https://htmlstream.com/front/assets/svg/icons/icon-31.svg"
                                                 alt="SVG" />
                                        </figure>
                                        <h4>Sell properties</h4>
                                        <p>Wanting to find a sold property price or see what sold on the weekend?</p>
                                        <a href="#">Sell properties <i
                                            className="fas fa-angle-right align-middle ml-1"></i></a>
                                    </div>
                                </div>
                                {/* <!-- End Card --> */}
                            </div>
                        </div>
                        {/* <!-- End Row --> */}
                    </div>
                </div>
                {/* <!-- End Row --> */}
            </div>

            <div className="hero-v1 d-none d-md-block"
                 style={{backgroundImage: "url('https://htmlstream.com/front/assets/img/900x900/img22.jpg')"}}></div>
        </div>
    )
}


export default Features;