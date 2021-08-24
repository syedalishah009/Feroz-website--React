import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"


import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer'

const App=()=>{
        return(
            <div>
                <Navbar/>
                <switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/About" component={About}/>
                <Route exact path="/Service" component={Service}/>
                <Route exact path="/Contact" component={Contact}/>
                <Redirect to="/" />
                </switch>
                <Footer/>
                

            </div>

        )

}

export default App;