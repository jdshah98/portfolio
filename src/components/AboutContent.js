import './AboutContentStyles.css'

import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.webp'

const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who Am I?</h1>
                <p>I'm a graphic designer. I design creative and attractive graphics for my clients.</p>
                <Link to="/contact" className="btn">CONTACT</Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src={img1} className="img" alt="img" />
                    </div>
                    <div className='img-stack bottom'>
                        <img src={img2} className="img" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent
