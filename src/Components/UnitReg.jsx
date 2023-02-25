import React, { useState } from 'react'
import logo from "../assets/logo.svg"
import icon2 from "../assets/icon2.svg"
import ic from "../assets/ic.svg"
import nav from "../assets/nav.svg"

import ayo from "../assets/ayo.jpg"
import ima from "../assets/ima.jpg"
import ola from "../assets/ola.jpg"
import josh from "../assets/josh.jpg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Registration.css"
import { Link } from 'react-router-dom'

import "./UnitReg.css"


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
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const UnitReg = () => {


    const [address, setAddress] = useState("")
    const [unitName, setUnitName] = useState("")
    const [unitNumber, setUnitNumber] = useState("")

    const handleSubmission = (event) => {
        event.preventDefault();
        console.log(`Address: ${address}`);
        console.log(`UnitName: ${unitName}`);
        console.log(`UnitNumber: ${unitNumber}`);
        setUnitName("")
        setAddress("")
        setUnitNumber("")
        event.target.reset();

        // Here you can store the data in a state management library like Redux, or send it to an API endpoint
    };

    const handleAddress = (e) => {
        e.preventDefault();
        setAddress(e.target.value)
    }

    const handleUnitName = (e) => {
        e.preventDefault();
        setUnitName(e.target.value)
    }

    const handleUnitNumber = (e) => {
        e.preventDefault();
        setUnitNumber(e.target.value)
    }


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

                <Carousel className='caro3' showDots={true} autoPlay={true} infinite={true} responsive={responsive} >
                    <div>
                        <img className='ayo3' src={ayo} alt="" />
                    </div>
                    <div>
                        <img className='ayo3' src={ola} alt="" />
                    </div>
                    <div>
                        <img className='ayo3' src={josh} alt="" />
                    </div>
                    <div>
                        <img className='ayo3' src={ima} alt="" />
                    </div>

                </Carousel>


                <h1 className="header3">
                    REGISTER YOUR UNIT
                </h1>


            </div>
            {/* wjite background */}
            <div className="second">
                <Link to="/" className="form-top">
                    <span className="nav"><img src={nav} alt="" /></span>    Back
                </Link>

                <div className="reg-form">
                    <div className="reg-heading
                ">
                        Register Your Unit

                    </div>

                    <div className="reg-desc">
                        For the purpose of proper data computation, your details are required.
                    </div>

                    <div className="hline">

                    </div>

                    <form onSubmit={handleSubmission} className="forml">
                        <div className="each">
                            <span className='label'> Address*</span>
                            <input required onChange={handleAddress} placeholder='E.g Asa-dam, Ilorin' type="text" name='owner' id='owner' className='owner' />
                        </div>

                        <div className="each">
                            <span className='label'> Unit Name*</span>
                            <input required onChange={handleUnitName} type="text" name='phone' id='phone' placeholder="E.g Taiwo unit" className='owner' />
                        </div>


                        <div className="each">
                            <span className='label'>Unit Number*</span>
                            <input onChange={handleUnitNumber} type="text" placeholder='E.g 112' required name='identity' id='identity' className='owner' />
                        </div>


                        <button type='submit' className="verify2">
                            Register Data</button>

                        {/* 
                        <button type='submit' className="verify1">
                            Register Data
                        </button> */}

                    </form>
                    <div>



                    </div>
                </div>
            </div>

        </div>
    )
}

export default UnitReg
