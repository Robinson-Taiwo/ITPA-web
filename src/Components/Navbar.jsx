/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import logo from "../assets/Icons/itpa-logo.webp"
import menu from "../assets/Icons/menu.svg"
import cancle from "../assets/Icons/cancle.svg"
// import circle from "../src/assets/icons/cancel_circle.svg"
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = ({ backgroundColor, borderGradient }) => {

    const [showMenu, setShowMenu] = useState(false)
    // defining toggle menu function
    const setMenu = () => { setShowMenu(!showMenu) }
    useEffect(() => {
        if (showMenu) {
            // Add the class to the body when the modal is open
            document.body.classList.add('overlay-open');
        } else {
            // Remove the class when the modal is closed
            document.body.classList.remove('overlay-open');
        }

        // Clean up the effect
        return () => {
            document.body.classList.remove('overlay-open');
        };
    }, [showMenu]);

    const navbarStyle = {
        background: `${backgroundColor}`,
        border: `${borderGradient}`,
    };


    const buttonStyle = {
        background: `${backgroundColor}`,
        borderImage: `${borderGradient}`,
    };



    return (

        <div className="navbar">

            <div className="navbar-container"  >
                {/* navbar logo */}

                <Link to="/" >

                    <img className="nav-logo" src={logo} alt="" />
                </Link>


                <div className="liok">

                    {/* menu toggling */}
                    <div onClick={setMenu}>
                        {!showMenu ? (<img className="nav-menu" src={menu} alt="" />) : (<div className='nav-menu circle'>
                            <img className='x' src={cancle} alt="" /></div>)}
                    </div>
                </div>


                <aside className={!showMenu ? "ll" : "menu"}>
                    <div>
                        <div onClick={setMenu} className='nav-menu circle'>
                            <img className='x' src={cancle} alt="" /></div>
                    </div>
                    <div className="menu-item-container">

                        <div className="menu-item-two">


                            <Link to="/" className="menu-item">Home</Link>
                            <Link to="/About" className="menu-item">About</Link>
                            <Link to="/Event" className="menu-item">Event</Link>
                            <Link to="/contact" className="menu-item navbar-button">Contacts</Link>
                        </div>




                    </div>

                </aside>

            </div>

            {/* <div className="nav-line">
      </div> */}
        </div>

    )
}

export default Navbar