import React from "react";


const AuthWrapper = ({children}) => {
    return (
        <main id="content" role="main">
            {/* <!-- Form --> */}
            <div className="d-flex align-items-center position-relative vh-lg-100">
                <div className="col-lg-5 col-xl-4 d-none d-lg-flex align-items-center bg-dark vh-lg-100 px-0"
                     style={{backgroundImage: `url('${require("../../assets/svg/components/abstract-shapes-20.svg")}')`}}>
                    <div className="w-100 p-5">
                        {/* <!-- SVG Quote --> */}
                        <figure className="text-center mb-5 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px"
                                 y="0px" width="40px" height="40px"
                                 viewBox="0 0 8 8" style={{enableBackground: "new 0 0 8 8"}} xmlSpace="preserve">
                                <path fill="#fff" d="M3,1.3C2,1.7,1.2,2.7,1.2,3.6c0,0.2,0,0.4,0.1,0.5c0.2-0.2,0.5-0.3,0.9-0.3c0.8,0,1.5,0.6,1.5,1.5c0,0.9-0.7,1.5-1.5,1.5
                                C1.4,6.9,1,6.6,0.7,6.1C0.4,5.6,0.3,4.9,0.3,4.5c0-1.6,0.8-2.9,2.5-3.7L3,1.3z M7.1,1.3c-1,0.4-1.8,1.4-1.8,2.3
                                c0,0.2,0,0.4,0.1,0.5c0.2-0.2,0.5-0.3,0.9-0.3c0.8,0,1.5,0.6,1.5,1.5c0,0.9-0.7,1.5-1.5,1.5c-0.7,0-1.1-0.3-1.4-0.8
                                C4.4,5.6,4.4,4.9,4.4,4.5c0-1.6,0.8-2.9,2.5-3.7L7.1,1.3z"/>
                            </svg>
                        </figure>
                    </div>
                </div>
                <div className="container">
                    <div className="row no-gutters">
                        <div
                            className="col-md-8 col-lg-7 col-xl-6 offset-md-2 offset-lg-2 offset-xl-3 space-top-3 space-lg-0">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AuthWrapper; 