import React from 'react'
import './style.css';
import Avatar from '@mui/material/Avatar';

const JoinedClasses = () => {
    return (
        <li className='joined__list'>
            <div className='joined__wrapper'>
                <div className='joined__container'>
                    <div className='joined__imgWrapper' />
                    {/* <div className='joined__image' /> */}
                    <div className='joined__content'>
                        {/* <Link className="joined__title" to={`/${classData.id}`}>
                            <h2>{classData.className}</h2>
                        </Link> */}
                        <p className='joined__owner'>Class</p>
                    </div>
                </div>
                <Avatar className='joined__avatar'/>
            </div>
        </li>
    )
}

export default JoinedClasses