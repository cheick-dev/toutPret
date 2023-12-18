import React, { useEffect, useState } from "react";
import { listUsers } from "../services/new";
import "../styles/index.css";
import { Link } from "react-router-dom";
import GoBack from "../components/Goback";
import Loder from "../components/Loder";
import MyError from "../components/MyError";
import NavBar from "../components/NavBar";

const ProfileList = () => {
    const [users, setUsers] = useState([])
    const [isLoding, setIsLoding] = useState(true)
    const [isError, setIsError] = useState({
        message: '',
        test: false
    })

    const fetchUsersDatas = async () => {
        const data = await listUsers()
        if (data.message) {
            setIsError({
                test: true,
                message: data.message
            })
            setIsLoding(false)
        }
        setUsers(data)
        setIsLoding(false)
    }

    useEffect(() => {
        fetchUsersDatas()
    }, [])


    return (
        <div>
            <NavBar />
            <div style={{
                marginTop: 60
            }}>
            <GoBack />
            {isLoding ? (<Loder />) :
                (
                    isError.test ? <MyError message={isError.message}/> : users.map(item => (
                        <Link to={`/Details/${item.user_id}`} className="user-container" key={item.$id}>
                            <img src={item.avatar} className="user-photo" />
                            <div className="user-info">
                                <p className="user-name">{item.name} </p>
                                <p className="user-number">
                                    <img src="loc.png" className="location-icon" />
                                    {item.city}, {item.precise_location}
                                </p>
                                <p className="user-domain">Domaine: {item.domaine}</p>
                            </div>
                        </Link>
                    ))
                )

            }
            </div>
        </div >

    );
};

export default ProfileList;
