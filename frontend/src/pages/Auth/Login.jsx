import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {connect} from "react-redux"

import {setUser} from "../../store/actions/auth"

import AuthWrapper from "./index"


const Login = ({setUser}) => {
    const history = useHistory();
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const login = e => {
        e.preventDefault()

        const data = {
            username: username,
            password: password
        }

        axios.post("/users/login/", data)
            .then(response=> {
                history.push("/");
                setUser(response.data)
            })
            .catch(error=> {
                console.log(error.response)
            })


    }
    
    return (
        <AuthWrapper>
            {/* <!-- Form --> */}
            <form className="js-validate" onSubmit={login}>
                {/* <!-- Title --> */}
                <div className="mb-5 mb-md-7">
                    <h1 className="h2">Welcome back</h1>
                    <p>Login to manage your account.</p>
                </div>
                {/* <!-- End Title --> */}

                {/* <!-- Form Group --> */}
                <div className="js-form-message form-group">
                    <label className="input-label">Email address</label>
                    <input value={username} onChange={e=> setUsername(e.target.value)} type="text" className="form-control" name="username"
                           tabIndex="1" placeholder="Username" aria-label="Username" required
                           data-msg="Please enter your username."/>
                </div>
                {/* <!-- End Form Group --> */}

                {/* <!-- Form Group --> */}
                <div className="js-form-message form-group">
                    <label className="input-label" htmlFor="signinSrPassword" tabIndex="0">
                  <span className="d-flex justify-content-between align-items-center">
                    Password
                    <a className="link-underline text-capitalize font-weight-normal" href="page-recover-account.html">Forgot Password?</a>
                  </span>
                    </label>
                    <input value={password} onChange={e=> setPassword(e.target.value)} type="password" className="form-control" name="password"
                           id="signinSrPassword" tabIndex="2" placeholder="********"
                           aria-label="********" required
                           data-msg="Your password is invalid. Please try again."/>
                </div>
                {/* <!-- End Form Group --> */}

                {/* <!-- Button --> */}
                <div className="row align-items-center mb-5">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <span className="font-size-1 text-muted">Don't have an account?</span>
                        <a className="font-size-1 font-weight-bold" href="page-signup.html">Signup</a>
                    </div>

                    <div className="col-sm-6 text-sm-right">
                        <button type="submit" className="btn btn-primary transition-3d-hover">Get
                            Started
                        </button>
                    </div>
                </div>
                {/* <!-- End Button --> */}
            </form>
            {/* <!-- End Form --> */}
        </AuthWrapper>
    )
}


function mapDispatchToProps(dispatch) {
    return {
        setUser: (user) => dispatch(setUser(user))
    }
}

export default connect(null, mapDispatchToProps)(Login);
