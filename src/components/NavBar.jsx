import React, { useState } from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)
	const [search, setSearch] = useState(false);
	const [searchText, setSearchText] = useState("");

    return (
        <div className='menu-nav'>
            <div className='nav-bar'>
                <div className="hanburger-container" onClick={() => setShowMenu(!showMenu)} >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <img src="logoZ.png" alt="Logo" width={35} height={40} />
                </div>
                {
                    <div className={search ? "search-input show" : "search-input"}>
                        <input type="text" />
                    </div>
                }
                <div className="search-icon" onClick={()=> setSearch(!search)}>
                    <img src="search.png" alt="search" />
                </div>
            </div>

            <div className={showMenu ? "menu showMenu" : "menu"}>
                <div onClick={() => setShowMenu(false)}>
                    <img
                        src="close.png"
                        alt="Close Icon"
                        className="closeIcon"
                    />
                </div>
                <div className="menuItem">
                    <Link to="/inscription" className="menuItemText">Devenir prestataire</Link>
                </div>
                <div className="menuItem">
                    <Link to="ConseilUsage" className="menuItemText">Conseillé client</Link>
                </div>
                <div className="menuItem">
                    <Link to={""} className="menuItemText">Contacter-nous</Link>
                </div>
                <div className="menuItem">
                    <Link to={""} className="menuItemText">Changer votre localisation</Link>
                </div>
            </div>
        </div>

    )
}

export default NavBar