import React from "react";
import { Link as RouterLink } from 'react-router-dom';
// import { Link } from "react-scroll";
import'./LandingPage.css'

class LandingPage extends React.Component{

    render() {
        return(
            <div className="landingpage">
            <body className="body">
            
            <header className="top">

                <p>
                   Menús App 
                </p>

            </header>

            <div className="boxes">

            <div className="box">
                <RouterLink to='/home'>Home</RouterLink>
            </div>
            
            </div>

            <footer className="foot">
                <p>&copy;Bruno Leonel Mendiberry 2023</p>
            </footer>




            </body>    
            </div>
        )
    }

}

export default LandingPage;