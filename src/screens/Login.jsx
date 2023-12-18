import React, { useState } from 'react'
import Button from '../components/Button'
import GoBack from '../components/Goback';
import { Link, useNavigate } from 'react-router-dom';
import { logging } from '../services/new';

const Login = () => {

    const [formData, setFormData] = useState({
        email: "user4@gmail.com",
        password: "toto1010",
    });
    const [formError, setFormError] = useState(false)
    const navigate = useNavigate()
    const handleInputChange = (fieldName, value) => {
        setFormData({ ...formData, [fieldName]: value });
    };

    const submitData = async () => {

        for (let field in formData) {
            if (formData[field].trim().length >= 4) {
                setFormError(true)
            }
        }
        
        if (formError) {
            const response = await logging(formData)
            if (response.length >= 10) {
                navigate(`/user-profile/${response}`)
            }
        }
    }

    return (
        <>
            <GoBack />
            <div className="form-container">
                <form method="post">
                    <div className="formSection">
                        <div className="entry">
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' required onChange={(text) =>
                                handleInputChange("email", text.target.value)
                            }
                                value={formData.email} />
                        </div>

                        <div className="entry">
                            <label htmlFor="password">password</label>
                            <input type="password" id='password' required onChange={(text) =>
                                handleInputChange("password", text.target.value)
                            }
                                value={formData.password} />
                        </div>
                    </div>
                    <div onClick={()=> submitData()}>
                        <Button content='Connection' />
                    </div>
                </form>
            </div>
            <center><Link className='have-acount' to='/inscription'>Vous n'avez pas de compte?</Link></center>
        </>
    )
}

export default Login