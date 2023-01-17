import React from 'react'
import './HeroImgStyles.css'
import IntroImg from '../assets/intro-img.jpg'
import { Link } from 'react-router-dom'

const HeroImg = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='intro-img' src={IntroImg} alt="IntroImg" />
            </div>
            <div className='content'>
                <p>HI I'M A FREELANCER.</p>
                <h1>Web Developer</h1>
                <div>
                    <Link to="/portfolio/project" className='btn'>Projects</Link>
                    <Link to="/portfolio/contact" className='btn btn-light'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg