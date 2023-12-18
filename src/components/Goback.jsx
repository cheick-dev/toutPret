import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getConnectedAccount } from '../services/new';


const GoBack = () => {
    const navigate = useNavigate()

    const [connectedAccount, setConnectedAccount] = useState({})

    const handleGoBack = async () => {
        const user = await getConnectedAccount()
        setConnectedAccount(user.$id)
        if (user.$id) {
            navigate('/');
        } else {
            navigate(-1);
        }
    };

    return (
        <div className='go-back'>
            <div onClick={handleGoBack}>
                <svg
                    fill="#ffffff"
                    height="30px"
                    width="30px"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    enableBackground="new 0 0 512 512"
                    xmlSpace="preserve"
                    stroke="#ffffff"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <polygon points="213.3,205.3 213.3,77.3 0,248 213.3,418.7 213.3,290.7 512,290.7 512,205.3 "></polygon>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default GoBack;
