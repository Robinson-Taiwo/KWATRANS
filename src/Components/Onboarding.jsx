import React from 'react'
import logo from "../assets/logo.svg"
import "./Onboarding.css"


const Onboarding = () => {
    return (
        <div className='onboard' >
            {/* blue background */}
            <div className="first">

                <div className="logo">
                    <img className='log' src={logo} alt="" />

                    <div className="text">
                        KWTMS
                    </div>

                </div>

                {/* center div */}

                <div className="body-text">
                    The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.
                </div>

            </div>
            {/* wjite background */}
            <div className="second">
                <div className="second-top">
                    Already have an account? Sign In
                </div>

                <div className="center-choose">
                    <div className="choose-head">
                        Join Us!
                    </div>

                    <div className="choose-text">
                        To begin this journey, tell us what type of account you’d be opening.
                    </div>

                    <div className="div choose-options">

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Onboarding