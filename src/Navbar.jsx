import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <>
        

             
           
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <div className="container">
            <NavLink className="navbar-brand text-warning font-weight-bold" to="#">FerozTechnical</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-Target="#collapsenavbar">
            <span className="navbar-toggler-icon"></span>

            </button>

            <div className="collapse navbar-collapse text-center" id="collapsenavbar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link text-white">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/About" className="nav-link text-white">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Service" className="nav-link text-white">Service</NavLink>
                    </li> <li className="nav-item">
                        <NavLink to="Contact" className="nav-link text-white">Contact</NavLink>
                    </li>
                </ul>

            </div>

            </div>
 </nav>
    



 
        </>

    )

}

export default Navbar;