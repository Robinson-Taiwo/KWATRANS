import React from 'react'
import logo from "../assets/logo.svg"
// import icon2 from "../assets/icon2.svg"
import acc from "../assets/acc.svg"
import ic from "../assets/ic.svg"
import ayo from "../assets/ayo.jpg"
import loc from "../assets/loc.svg"
import ima from "../assets/ima.jpg"
import ola from "../assets/ola.jpg"
import josh from "../assets/josh.jpg"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Onboarding.css"
import { Link } from 'react-router-dom'




const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


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

                <Carousel className='caro' showDots={true} autoPlay={true} infinite={true} responsive={responsive} >
                    <div>
                        <img className='ayo' src={ayo} alt="" />
                    </div>
                    <div>
                        <img className='ayo' src={ola} alt="" />
                    </div>
                    <div>
                        <img className='ayo' src={josh} alt="" />
                    </div>
                    <div>
                        <img className='ayo' src={ima} alt="" />
                    </div>

                </Carousel>


                <h1 className="header">
                    KWARA STATE TRANSPORT MAAGEMENT SYSTEM
                </h1>


            </div>
            {/* wjite background */}
            <div className="second">
                <div className="second-top">
                    Already have an account?  <span className="sign"> Sign In</span>
                </div>

                <div className="center-choose">
                    <div className="choose-head">
                        Welcome!!
                    </div>

                    <div className="choose-text">
                        To begin your registration, tell us what you are registering
                    </div>



                    <Link to="Registration" className="choose-options">

                        <div className="icon">
                            <img src={loc} className="loc" alt="" />
                        </div>

                        <div className="rider">
                            <h1 className="option-head">
                                Ride and Rider
                            </h1>

                            <p className="option-text">
                                Register yourself and your ride at a goal

                                <img src={ic} alt="" className="ic" />
                            </p>
                        </div>

                    </Link>

                    <Link to="UnitReg" className="div choose-options">

                        <div className="icon">
                            <img src={acc} className="loc" alt="" />
                        </div>

                        <div className="rider">
                            <h1 className="option-head">
                                Your Unit
                            </h1>

                            <p className="option-text">
                                Register your transport unit
                            </p>
                        </div>

                    </Link>




                </div>



            </div>

        </div>
    )
}

export default Onboarding