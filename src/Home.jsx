import React from 'react';

import Typed from 'react-typed';  // install first npm typed
import { NavLink } from 'react-router-dom';


const Home = () => {
        return (
                <>
                        <div className="header-wrape">
                                <div className="main-info">
                                        <h1>Hey! I'm Feroz Shah And I'm expert in</h1>
                                        <Typed
                                        className="typed-text"
                                        strings={["Data Entry","Data Collection","Web Scraping","Admin Support","Virtual Assistant"]}
                                        typeSpeed={40}
                                        backSpeed={60}
                                        loop
                                       />

                                       
                                        <NavLink class="btn btn-outline-warning btn-lg" to="/About" role="button">Hire Me</NavLink>
                                </div>
                        </div>


                </>

        )

}

export default Home;