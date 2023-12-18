import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOneUser } from "../services/new";
import GoBack from "../components/Goback";
import Loder from "../components/Loder";

const Details = () => {
    const { id } = useParams()
    const [user, setUser] = useState({})
    const [isLoding, setIsLoding] = useState(true)


    const fetchUsersDatas = async (id) => {
        const data = await getOneUser(id)
        setUser(data.documents[0])
        setIsLoding(false)
    }

    useEffect(() => {
        fetchUsersDatas(id)
    }, [])

    return (
        <div>
            <GoBack />
            {isLoding ? (<Loder/>) : (<div className="infons-conatiner">
                <img src={user.avatar} alt="User Avatar" className="userPhoto" />
                <h1 className="userName">{user.name}</h1>
                <div className="userInfo">
                    <div className="userDomaine titre">
                        Appeler:
                        <Link to={`tel:${user.phone}`} className="callLink">
                            {user.phone}
                        </Link>
                    </div>
                    <div className="userDomaine">
                        <span className="titre">Domaine: </span>
                        {user.domaine}
                    </div>
                    <div className="userDomaine">
                        <span className="titre">Ville: </span>
                        {user.city}
                    </div>
                    <div className="userDomaine">
                        <span className="titre">Localisation précise: </span>
                        {user.precise_location}
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default Details;
