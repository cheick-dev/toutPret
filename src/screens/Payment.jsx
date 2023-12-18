import React from 'react'
import GoBack from '../components/Goback'

const Payment = () => {

    return (
        <div>
            <GoBack />
            <button id="pay-btn" className='button' onClick={(e) => {
                FedaPay.init(e.target, {
                    public_key: 'pk_live_f_Us2nnFjd4aQfcdMc1kRYXm',
                    transaction: {
                        amount: 1000,
                        description: 'Buy my product'
                    },
                    customer: {
                        email: 'johndoe@gmail.com',
                        lastname: 'Doe',
                        firstname: 'John',
                    }
                })
            }}>Pay 1000 FCFA</button>
        </div>
    )
}

export default Payment