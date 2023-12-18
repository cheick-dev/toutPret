import React from 'react'
import Button from '../components/Button'
import NavBar from '../components/NavBar'



const HomeScreen = () => {
	return (
		<div className='home-div'>
			<NavBar />
			<div className="logo">
				<img src="logoZ.png" alt="Logo" />
			</div>
			<div>
				<Button content='Je suis client' path='/users' link={true} />
			</div>
			<div>
				<Button content='Je suis prestataire' path='/inscription' link={true} />
			</div>
		</div>
	)
}

export default HomeScreen