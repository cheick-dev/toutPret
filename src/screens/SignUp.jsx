import React, { useState } from 'react'
import GoBack from '../components/Goback';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { createUser, userInfos } from '../services/new';

const SignUp = () => {

    const MetiersListe = [
        "Plombier", "Menuisier", "Soudeurs", "Mécanicien", "Maçon", "Couturier", "Cordonnier",
        "Livreur", "Carreleurs", "Peintre", "Maintenance informatique", "Photographe", "Cameraman",
        "Graphiste", "Programmeurs", "Architecte", "Ménagères", "Serveur", "Maître de maison",
        "Vulganisateur", "Dentiste", "Maquilleuse", "Cuisinier", "Monteurs vidéo",
    ];

    const [formError, setFormError] = useState(false)
    const [tabs, setTabs] = useState(1);
    const [formData, setFormData] = useState({
        email: "user4@gmail.com", password: "toto1010", name: "User4",
        firstname: "User4", phone: "0600000000", city: "Bouna4",
        municipality: "Bouna4", domaine: "Couturier", precise_location: "Pharmacie4"
    });
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
            const {user_infos, user_id} = await createUser(formData)
            console.log(user_infos, user_id);
            if (user_infos.$id.length >= 10) {
                navigate(`/user-profile/${user_id}`)
            }

        }
    }


    const handleClick = () => {
        // if (tabs >= 3) {
        //     navigate('/payment')
        // }
        setTabs(tabs + 1);
    };

    const FormSection1 = () => {
        return (
            <div className="formSection">
                <div className="entry">
                    <label htmlFor="name">Nom</label>
                    <input required autoComplete='true' type="text" id='name' name='name'
                        onChange={(text) =>
                            handleInputChange("name", text.target.value)
                        }
                        value={formData.name}
                    />
                </div>
                <div className="entry">
                    <label htmlFor="firstname">Prénom</label>
                    <input required autoComplete='true' type="text" id='firstname' name='firstname' onChange={(text) =>
                        handleInputChange("firstname", text.target.value)
                    }
                        value={formData.firstname} />
                </div>
                <div className="entry">
                    <label htmlFor="phone">Numéro de téléphone</label>
                    <input required autoComplete='true' type="tel" id='phone' name='phone' onChange={(text) =>
                        handleInputChange("phone", text.target.value)
                    }
                        value={formData.phone} />
                </div>
            </div>
        )
    };

    const FormSection2 = () => {
        return (
            <div className="formSection">
                <div className="entry">
                    <label htmlFor="email">Email</label>
                    <input required autoComplete='true' type="email" id='email' name='email' onChange={(text) =>
                        handleInputChange("email", text.target.value)
                    }
                        value={formData.email} />
                </div>
                <div className="entry">
                    <label htmlFor="password">Mot de passe</label>
                    <input required autoComplete='true' type="password" id='password' name='password' onChange={(text) =>
                        handleInputChange("password", text.target.value)
                    }
                        value={formData.password} />
                </div>
                <div className="entry">
                    <label htmlFor="city">Ville</label>
                    <input required autoComplete='true' type="text" id='city' name='city' onChange={(text) =>
                        handleInputChange("city", text.target.value)
                    }
                        value={formData.city} />
                </div>
            </div>
        )
    };

    const FormSection3 = () => {
        return (
            <div className="formSection">
                <div className="entry">
                    <label htmlFor="municipality">Commune</label>
                    <input required autoComplete='true' type="text" id='municipality' name='municipality'
                        onChange={(text) =>
                            handleInputChange("municipality", text.target.value)
                        }
                        value={formData.municipality} />
                </div>
                <div className="entry">
                    <label >Domaine d'activité</label>
                    <select name='domaine' onChange={(text) =>
                        handleInputChange("domaine", text.target.value)
                    }
                        value={formData.domaine} >
                        {MetiersListe.map(metier => <option key={metier} value={metier}>{metier}</option>)}
                    </select>
                </div>
                <div className="entry">
                    <label htmlFor="precise_location">Emplacement précis</label>
                    <input required autoComplete='true' type="text" id='precise_location' name='precise_location' onChange={(text) =>
                        handleInputChange("precise_location", text.target.value)
                    }
                        value={formData.precise_location} />
                </div>
            </div>
        )
    };

    return (
        <>
            <GoBack />
            <div className="form-container">
                <form action="" method="post">
                    {
                        tabs == 1 ? <FormSection1 /> : tabs == 2 ? <FormSection2 /> : <FormSection3 />
                    }
                    {
                        tabs >= 3 ? <div onClick={submitData}>
                            <Button content='Inscription' />
                        </div> : (
                            <div className='arrowIcon' onClick={handleClick}>
                                <img src="arrowIcon.png" alt="arrowIcon" />
                            </div>
                        )
                    }

                </form>
            </div>
            <center><Link className='have-acount' to='/login'>Vous avez déja un compte?</Link></center>

        </>
    )
}

export default SignUp