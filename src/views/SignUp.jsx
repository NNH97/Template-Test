import { useState } from "react"
import InputCustom from "../core-component/InputCustom"
import Logo from "../assets/logo.png"
import { ReactComponent as IconFacebook } from "../assets/iconFB.svg"
import { ReactComponent as IconGoogle } from "../assets/iconGG.svg"
import { BsPersonCircle } from "react-icons/bs"
import { HiMail } from "react-icons/hi"
import { IoMdLock } from "react-icons/io"

import "./SignUp.css"

function SignUp() {
    const [check, setCheck] = useState(true)
    return (
        <div className="sign-up-wrapper">
            <a href="/" className="brand-logo" onClick={(e) => e.preventDefault()}>
                <img src={Logo} alt="logo" />
            </a>
            <div className="side-left"></div>
            <div className="side-right">
                <div className="side-right-top">
                    <div className="side-right-title">Create your account</div>
                    <form className="auth-register-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="control-input">
                            <label htmlFor="register-username" className="form-label">
                                Name
                            </label>
                            <InputCustom
                                className="input-group"
                                idInput="register-username"
                                typeInput="text"
                                placeholderInput="Enter your name"
                                icon={<BsPersonCircle style={{ color: "#B5B6B8" }} />}
                            />
                        </div>
                        <div className="control-input">
                            <label htmlFor="register-mail" className="form-label">
                                Email
                            </label>
                            <InputCustom
                                className="input-group"
                                idInput="register-mail"
                                typeInput="email"
                                placeholderInput="Enter your email"
                                icon={<HiMail style={{ color: "#B5B6B8" }} />}
                            />
                        </div>
                        <div className="control-input">
                            <label htmlFor="register-password" className="form-label">
                                Password
                            </label>
                            <InputCustom
                                className="input-group"
                                idInput="register-password"
                                typeInput="password"
                                placeholderInput="Create password"
                                icon={<IoMdLock style={{ color: "#B5B6B8" }} />}
                            />
                            <div className="rule-password">Must be at least 8 characters</div>
                        </div>

                        <div className="form-check">
                            <input
                                type="checkbox"
                                id="terms"
                                checked={check}
                                onChange={() => {
                                    setCheck(!check)
                                }}
                            />
                            <label htmlFor="terms" className="form-check-label">
                                I agree to all
                                <a
                                    style={{ marginLeft: "10px" }}
                                    className="term"
                                    href="/"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Terms & Conditions
                                </a>
                            </label>
                        </div>
                        <button type="submit" className="btn-submit">
                            Sign up
                        </button>
                    </form>
                </div>
                <p>or continue with</p>
                <div className="register-with">
                    <button>
                        <IconGoogle style={{ width: "25px", height: "25px" }} /> Google
                    </button>
                    <button>
                        <IconFacebook style={{ width: "15px", height: "15px" }} /> Facebook
                    </button>
                </div>
                <p>
                    <span>Already have an account</span>
                    <a href="/" onClick={(e) => e.preventDefault()}>
                        {" "}
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    )
}

export default SignUp
