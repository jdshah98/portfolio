import './WorkCardStyles.css'

import React from 'react'

const WorkCard = (props) => {
    return (
        <div className='project-card'>
            <img src={props.imgsrc} alt="img" className='project-image' />
            <h2 className='project-title'>{props.title}</h2>
            <div className='project-details'>
                <p>{props.text}</p>
                <div className='project-btns'>
                    <a href={props.view} className='btn' target="_blank" rel="noreferrer">VIEW</a>
                </div>
            </div>
        </div>
    )
}

export default WorkCard