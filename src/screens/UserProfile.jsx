import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { createAvatar, deleteAvatar, getAvatar, getOneUser, updateDocument } from "../services/new";
import GoBack from "../components/Goback";
import Loder from "../components/Loder";
import Button from "../components/Button";

const UserProfile = () => {

    const { id } = useParams()
    const [user, setUser] = useState({})
    const [isLoding, setIsLoding] = useState(true)
    const [pupUp, setpupUp] = useState(false)

    const fetchUsersDatas = async (id) => {
        const data = await getOneUser(id)
        setUser(data.documents[0])
        setIsLoding(false)
    }
    // console.log(user.$id);



    useEffect(() => {
        fetchUsersDatas(id)
    }, [])

    const PupUp = () => {
        const func = async () => {
            // console.log(document.getElementById('avatar').files.length);
            if (document.getElementById('avatar').files.length === 0) {
                alert('Choisissez une photo')
            } else {
                const response = await createAvatar(document.getElementById('avatar').files[0])
                console.log(response);
                if (response.length >= 10) {
                    const url = await getAvatar(response)
                    const setedData = {
                        docId: user.$id,
                        avatar: url
                    }
                    // await deleteAvatar(response)
                    await updateDocument(setedData)
                    fetchUsersDatas(id)
                }
            }
        }
        return (
            <div className="pup-up">
                <div className="close" onClick={() => {
                    setpupUp(!pupUp)
                }}>
                    X
                </div>
                <div class="file-input-container">
                    <input type="file" className="file-input" id="avatar" />
                </div>
                <div onClick={func}>
                    <Button content='Envoyer' />
                </div>
            </div>
        )
    }

    return (
        <div>
            <GoBack />
            {isLoding ? (<Loder />) : (
                <div className="infons-conatiner">
                    { pupUp && <PupUp /> }
                    <div style={{
                        width:'100%'
                    }}>
                        <img src={user.avatar} alt="User Avatar" className="userPhoto" />
                        <div onClick={() => {
                            setpupUp(!pupUp)
                        }}>
                            <Button content='Changer la photo' />
                        </div>
                    </div>
                    <h1 className="userName">{user.name}</h1>
                    <div className="userInfo">
                        <div className="userDomaine">
                            <span className="titre">Numéro: </span> {user.phone}
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
                </div>
            )}
        </div>
    );
}

export default UserProfile