import React from 'react'
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
import { useState } from 'react'




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




const Registration = () => {


    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [idNumber, setIdNumber] = useState("")
    const [chasesNumber, setChasesNumber] = useState("")


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}`);
        console.log(`Number: ${number}`);
        console.log(`idNumber: ${idNumber}`);
        console.log(`chasesNumber: ${chasesNumber}`);
        setName("")
        setNumber("")
        setIdNumber("")
        setChasesNumber("")

        // Here you can store the data in a state management library like Redux, or send it to an API endpoint
    };

    const handleName = (e) => {
        e.preventDefault();
        setName(e.target.value)
    }

    const handleNumber = (e) => {
        e.preventDefault();
        setNumber(e.target.value)
    }

    const handleId = (e) => {
        e.preventDefault();
        setIdNumber(e.target.value)
    }

    const handleChases = (e) => {
        e.preventDefault();
        setChasesNumber(e.target.value)
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
                    KWARA STATE TRANSPORT MANAGEMENT SYSTEM
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
                        Register Your Ride

                    </div>

                    <div className="reg-desc">
                        For the purpose of proper data computation, your details are required.
                    </div>

                    <div className="hline">

                    </div>

                    <form onSubmit={handleSubmit} className="forml">
                        <div className="each">
                            <span className='label'> Owner's Name*</span>
                            <input value={name} onChange={handleName} placeholder='E.g Jane Doe' type="text" name='owner' id='owner' className='owner' />
                        </div>

                        <div className="each">
                            <span className='label'> phone number*</span>
                            <input value={number} onChange={handleNumber} type="tel" name='phone' id='phone' pattern="\+234[0-9]{10}" placeholder="+234XXXXXXXXXX" required className='owner' />
                        </div>


                        <div className="each">
                            <span className='label'>identity number*</span>
                            <input value={idNumber} onChange={handleId} type="text" placeholder='E.g Jane Doe' name='identity' id='identity' className='owner' />
                        </div>

                        <div className="each">
                            <span className='label'> Chases number*</span>
                            <input value={chasesNumber} onChange={handleChases} type="num" placeholder='E.g 255637PO' name='chases' id='chases' className='owner' />
                        </div>


                        <button className="verify">
                            Register Data
                        </button>

                    </form>
                    <div>



                    </div>
                </div>
            </div>

        </div>
    )
}

export default Registration