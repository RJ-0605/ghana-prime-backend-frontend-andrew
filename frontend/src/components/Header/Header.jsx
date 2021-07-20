import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";


const Header = ({user}) => {
    return (
        <header className="header header-bg-transparent header-abs-top-lg">
            <div className="js-mega-menu header-section">
                {/* <!-- Topbar --> */}
                <div className="container">
                    <nav className="js-mega-menu navbar navbar-expand-lg z-index-999">
                        {/* <!-- Responsive Toggle Button --> */}
                        <button type="button" className="navbar-toggler btn btn-xs btn-outline-secondary ml-auto"
                                aria-label="Toggle navigation"
                                aria-expanded="false"
                                aria-controls="topBar"
                                data-toggle="collapse"
                                data-target="#topBar">
                            Topbar <i className="fa fa-angle-down ml-2"></i>
                        </button>
                        {/* <!-- End Responsive Toggle Button --> */}

                        <div id="topBar" className="collapse navbar-collapse">
                            <ul className="navbar-nav w-100">
                                <li className="navbar-nav-item mr-auto">
                                    <a className="nav-link font-size-1 py-2 pl-0"
                                       href="https://htmlstream.com/front/index.html">
                                        <div className="d-flex align-items-center">
                                            <svg className="mb-0 mr-1" width="16px" height="16px" fill="currentColor"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M8.22,12.72A.75.75,0,0,1,8,12.19v-.38a.77.77,0,0,1,.22-.53l5.14-5.13a.5.5,0,0,1,.71,0l.71.71a.49.49,0,0,1,0,.7L10.33,12l4.45,4.44a.5.5,0,0,1,0,.71l-.71.7a.5.5,0,0,1-.71,0Z"/>
                                            </svg>
                                            Main Demo
                                        </div>
                                    </a>
                                </li>

                                {/* <!-- Demos --> */}
                                <li className="hs-has-mega-menu navbar-nav-item"
                                    data-hs-mega-menu-item-options='{
                    "desktop": {
                      "position": "right",
                      "maxWidth": "900px"
                    }
                  }'>
                                    <a id="demosMegaMenu"
                                       className="hs-mega-menu-invoker nav-link nav-link-toggle font-size-1 py-2"
                                       href="javascript:;" aria-haspopup="true" aria-expanded="false">Demos</a>

                                </li>
                                {/* <!-- End Demos --> */}

                                {!user ?
                                    <li className="hs-has-mega-menu navbar-nav-item"
                                        data-hs-mega-menu-item-options='{
                                            "desktop": {
                                              "position": "right",
                                              "maxWidth": "260px"
                                            }
                                          }'>
                                        <Link to={"/login/"}
                                              className="hs-mega-menu-invoker nav-link nav-link-toggle font-size-1 py-2 pr-0"
                                              href="javascript:;" aria-haspopup="true"
                                              aria-expanded="false">Login</Link>
                                    </li> :
                                    <li className="list-inline-item">
                                        <div className="hs-unfold">
                                            <a className="js-hs-unfold-invoker btn btn-xs btn-icon btn-ghost-secondary"
                                               href="javascript:;"
                                               data-hs-unfold-options='{
                                                "target": "#shoppingCartDropdown",
                                                "type": "css-animation",
                                                "event": "hover",
                                                "hideOnScroll": "true"
                                               }'>
                                                <i className="fas fa-user-circle"></i>
                                            </a>

                                            <div id="shoppingCartDropdown"
                                                 className="hs-unfold-content dropdown-menu dropdown-menu-right dropdown-card text-center"
                                                 style={{minWidth: 275}}>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <figure className="max-w-9rem mx-auto mb-3">
                                                            <img className="img-fluid"
                                                                 src="./assets/svg/illustrations/empty-cart.svg"
                                                                 alt="SVG"/>
                                                        </figure>
                                                        <span className="d-block">Your cart is empty</span>
                                                    </div>

                                                    <div className="card-footer">
                                                        <small>Free shipping on orders over <strong
                                                            className="text-dark">$50</strong></small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    // <li className="list-inline-item">
                                    //     <div className="hs-unfold">
                                    //         <a className="js-hs-unfold-invoker btn btn-icon btn-xs btn-ghost-secondary"
                                    //            href="javascript:;" data-toggle="modal" data-target="#signupModal">
                                    //             <i className="fas fa-user-circle"></i>
                                    //         </a>
                                    //     </div>
                                    // </li>
                                }
                                {/* <!-- End Docs --> */}
                            </ul>
                        </div>
                    </nav>
                </div>
                {/* <!-- End Topbar --> */}

                <div id="logoAndNav" className="container">
                    {/* <!-- Nav --> */}
                    <nav className="navbar navbar-expand-lg">
                        {/* <!-- Logo --> */}
                        <a className="navbar-brand" href="index.html" aria-label="Front">
                            <img src="https://htmlstream.com/front/assets/svg/logos/logo.svg" alt="Logo"/>
                        </a>
                        {/* <!-- End Logo --> */}

                        {/* <!-- Responsive Toggle Button --> */}
                        <button type="button"
                                className="navbar-toggler btn btn-icon btn-sm btn-soft-secondary rounded-circle"
                                aria-label="Toggle navigation"
                                aria-expanded="false"
                                aria-controls="navBar"
                                data-toggle="collapse"
                                data-target="#navBar">
            <span className="navbar-toggler-default">
              <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor"
                      d="M17.4,6.2H0.6C0.3,6.2,0,5.9,0,5.5V4.1c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,5.9,17.7,6.2,17.4,6.2z M17.4,14.1H0.6c-0.3,0-0.6-0.3-0.6-0.7V12c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,13.7,17.7,14.1,17.4,14.1z"/>
              </svg>
            </span>
                            <span className="navbar-toggler-toggled">
              <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor"
                      d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"/>
              </svg>
            </span>
                        </button>
                        {/* <!-- End Responsive Toggle Button --> */}

                        {/* <!-- Navigation --> */}
                        <div id="navBar" className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="navbar-nav-item">
                                    <a className="nav-link active" href="index.html">Home</a>
                                </li>

                                {/* <!-- Property Pages --> */}
                                {/*<div className="dropdown">*/}
                                {/*    <a className="btn btn-secondary dropdown-toggle" href="#" role="button"*/}
                                {/*       id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">*/}
                                {/*        Dropdown link*/}
                                {/*    </a>*/}

                                {/*    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">*/}
                                {/*        <li><a className="dropdown-item" href="#">Action</a></li>*/}
                                {/*        <li><a className="dropdown-item" href="#">Another action</a></li>*/}
                                {/*        <li><a className="dropdown-item" href="#">Something else here</a></li>*/}
                                {/*    </ul>*/}
                                {/*</div>v className="dropdown">*/}
                                {/*    <a className="btn btn-secondary dropdown-toggle" href="#" role="button"*/}
                                {/*       id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">*/}
                                {/*        Dropdown link*/}
                                {/*    </a>*/}

                                {/*    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">*/}
                                {/*        <li><a className="dropdown-item" href="#">Action</a></li>*/}
                                {/*        <li><a className="dropdown-item" href="#">Another action</a></li>*/}
                                {/*        <li><a className="dropdown-item" href="#">Something else here</a></li>*/}
                                {/*    </ul>*/}
                                {/*</div>*/}
                                <li className="dropdown navbar-nav-item mr-lg-auto">
                                    <a id="dropdownMenuLink" role={"button"} className="dropdown-toggle nav-link nav-link-toggle"
                                       data-bs-toggle="dropdown" aria-expanded="false"
                                       aria-labelledby="propertySubMenu">Listings</a>

                                    {/* <!-- Property Pages - Submenu --> */}
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                    {/* <!-- End Property Pages - Submenu --> */}
                                </li>
                                {/* <!-- End Property Pages --> */}

                                <li className="navbar-nav-item">
                                    <a className="nav-link " href="property-description.html">Property description</a>
                                </li>

                                {/* <!-- Button --> */}
                                <li className="navbar-nav-last-item">
                                    <a className="btn btn-sm btn-primary transition-3d-hover"
                                       href="property-seller.html">Start selling</a>
                                </li>
                                {/* <!-- End Button --> */}
                            </ul>
                        </div>
                        {/* <!-- End Navigation --> */}
                    </nav>
                    {/* <!-- End Nav --> */}
                </div>
            </div>
        </header>
    )
}


function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, null)(Header);
