import React from 'react'
import { Link } from 'react-router-dom'
// import '../styles/index.css'

const Button = ({ content, link = false, path }) => {
    if (link == true) {
        return (
            <div className='button'>
                <Link className='btn-link' to={path} >
                    {content}
                </Link>
            </div>
        )
    }
    return (
        <div className='button'>
            {content}
        </div>
    )
}

export default Button