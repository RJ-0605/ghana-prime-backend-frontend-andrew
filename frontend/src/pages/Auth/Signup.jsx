import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

import AuthWrapper from "./index"


const Signup = () => {

    const history = useHistory();

    const [isValid, setIsValid] = useState({
        firstName: true,
        lastName: true,
        email: true,
        username: true,
        password: true,
        passwordConfirm: true,
    })

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    const submit = (e) => {
        e.preventDefault()
        const data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            username: username,
            password: password
        }

        axios.post("/users/signup/", data)
            .then(response=> {
                history.push("/login/");
            }).catch(error=> {
                console.log(error.response)
        })
    }
    

    const validationMethods = {
        firstName: () => {
            if (firstName === "") {
            setIsValid(isValid => ({...isValid, firstName: false}))
            } else {
                setIsValid(isValid => ({...isValid, firstName: true}))
            }
        },
        lastName: () => {
            if (lastName === "") {
            setIsValid(isValid => ({...isValid, lastName: false}))
            } else {
                setIsValid(isValid => ({...isValid, lastName: true}))
            }
        },
        email: () => {
            const pattern = new RegExp(
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
            if (email.length > 0 && !pattern.test(email)) {
                setIsValid(isValid => ({...isValid, email: false}))
            } else {
                setIsValid(isValid => ({...isValid, email: true}))
            }
        },
        username: () => {
        },
        password: () => {
        },
        passwordConfirm: () => {
        }
    }

    const validateField = (e, field) => {
        const method = validationMethods[field]
        method()
    }

    return (
        <AuthWrapper>
            <form onSubmit={submit} className="js-validate">
                {/* <!-- Title --> */}
                <div className="mb-5 mb-md-7">
                    <h1 className="h2">Welcome to Front</h1>
                    <p>Fill out the form to get started. {isValid.value}</p>
                </div>
                {/* <!-- End Title --> */}
                {/* First Name and Last Name */}

                <div className="row">
                    <div className="col">
                        <div className="js-form-message form-group">
                            <label className="input-label">First Name</label>
                            <input value={firstName} onBlur={e => validateField(e, "firstName")}
                                   onChange={e => setFirstName(e.target.value)} type="text"
                                   className={`form-control ${!isValid.firstName ? "is-invalid" : ''}`}
                                   name="first_name"
                                   placeholder="e.g John"
                                   aria-label="First Name" required
                                   data-msg="Please enter your first name."/>
                            <div className="invalid-feedback">Please enter your first name.</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="js-form-message form-group">
                            <label className="input-label">Last Name</label>
                            <input value={lastName} onBlur={e => validateField(e, "lastName")}
                                   onChange={e => setLastName(e.target.value)} type="text"
                                   className={`form-control ${!isValid.lastName ? "is-invalid" : ''}`}
                                   name="last_name"
                                   placeholder="e.g Doe"
                                   aria-label="Last Name" required
                                   data-msg="Please enter your last name."/>
                            <div className="invalid-feedback">Please enter your last name.</div>
                        </div>
                    </div>

                </div>

                {/* <!-- Form Group --> */}
                <div className="js-form-message form-group">
                    <label className="input-label">Username</label>
                    <input value={username} onBlur={e => validateField(e, "username")}
                           onChange={e => setUsername(e.target.value)} type="text" className="form-control"
                           name="username"
                           placeholder="e.g johndoe03"
                           aria-label="Username" required
                           data-msg="Please enter your username."/>
                </div>
                {/* <!-- End Form Group --> */}

                <div className="js-form-message form-group">
                    <label className="input-label">Email address</label>
                    <input value={email} onBlur={e => validateField(e, "email")}
                           onChange={e => setEmail(e.target.value)} type="email"
                           className={`form-control ${!isValid.email ? "is-invalid" : ''}`} name="email"
                           placeholder="Email address"
                           aria-label="Email address" required
                           data-msg="Please enter a valid email address."/>
                    <div className="invalid-feedback">Please enter a valid email address.</div>
                </div>


                {/* <!-- Form Group --> */}
                <div className={"row"}>
                    <div className="col">
                        <div className="js-form-message form-group">
                            <label className="input-label">Password</label>
                            <input value={password} onChange={e => setPassword(e.target.value)} type="password"
                                   className="form-control" name="password"
                                   placeholder="********" aria-label="********" required
                                   data-msg="Your password is invalid. Please try again."/>
                            <div className={"invalid-feedback"}>Your password is invalid. Please try again.</div>
                        </div>
                    </div>
                    {/* <!-- End Form Group --> */}

                    {/* <!-- Form Group --> */}
                    <div className="col">
                        <div className="js-form-message form-group">
                            <label className="input-label">Confirm password</label>
                            <input value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)}
                                   type="password" className="form-control" name="confirmPassword"
                                   placeholder="********" aria-label="********" required
                                   data-msg="Password does not match the confirm password."/>
                        </div>
                    </div>
                </div>
                {/* <!-- End Form Group --> */}

                {/* <!-- Checkbox --> */}
                <div className="js-form-message mb-5">
                    <div className="custom-control custom-checkbox d-flex align-items-center text-muted">
                        <input type="checkbox" className="custom-control-input" id="termsCheckbox"
                               name="termsCheckbox"
                               required
                               data-msg="Please accept our Terms and Conditions."/>
                        <label className="custom-control-label" htmlFor="termsCheckbox">
                            <small>
                                I agree to the
                                <a className="link-underline" href="./page-terms.html">Terms and Conditions</a>
                            </small>
                        </label>
                    </div>
                </div>
                {/* <!-- End Checkbox --> */}

                {/* <!-- Button --> */}
                <div className="row align-items-center mb-5">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <span className="font-size-1 text-muted">Already have an account?</span>
                        <a className="font-size-1 font-weight-bold" href="page-login.html">Login</a>
                    </div>

                    <div className="col-sm-6 text-sm-right">
                        <button type="submit" className="btn btn-primary transition-3d-hover">Get Started</button>
                    </div>
                </div>
                {/* <!-- End Button --> */}
            </form>
        </AuthWrapper>
    )
}

export default Signup;