import './FooterStyles.css'

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-container'>
				<div className='left'>
					<div className='location'>
						<FaHome size={20} style={{ color: 'white', marginRight: '2rem' }} />
						<div>
							<p>C-603, Nova Shitalnath</p>
							<p>Pal, Surat, India.</p>
						</div>
					</div>
					<div className='phone'>
						<h4>
							<FaPhone size={20} style={{ color: 'white', marginRight: '2rem' }} />
							8469368554
						</h4>
					</div>
					<div className='email'>
						<h4>
							<FaMailBulk size={20} style={{ color: 'white', marginRight: '2rem' }} />
							jdshah.infotech@gmail.com
						</h4>
					</div>
				</div>
				<div className='right'>
					<h4>About the company</h4>
					<p>This is me Jainam Shah. I'm an enthustiastic Web and Cloud Developer with excellent skills.</p>
					<div className='social'>
						<FaFacebook size={30} style={{ color: 'white', marginRight: '2rem' }} />
						<FaTwitter size={30} style={{ color: 'white', marginRight: '2rem' }} />
						<FaLinkedin size={30} style={{ color: 'white', marginRight: '2rem' }} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer