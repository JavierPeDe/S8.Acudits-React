import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'
export const ButtonLink = () => (
    <div className="container-button">
        <span>
            <Link className='button-link' to="/home"></Link>
        </span>
    </div>
)