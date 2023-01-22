import React from "react";
import'./Landing.css';
import{Link}from'react-router-dom';
export default function LandingPage(){
    return(
        <>
        <main>
            <div className="image">
                <img src={require ('../images/landing.png')}alt='landingpage'/>
            </div>
            <div className="imageFolder">
                <h1>10x Team 04</h1>
            
            <Link to='/Postview'>
                <button className='btn'>
                   Enter

                </button></Link>
                </div>
            
        </main>
        </>
    )
}