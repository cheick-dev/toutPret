import React from 'react';
import GoBack from '../components/Goback';
// import '../styles/index.css'; // Import your CSS file

const ConseilUsage = () => {
    return (
        <>
            <GoBack />
            <div className="bigContainer">
                <h1 className="titleH1">ConseilUsage</h1>
                <div className="container">
                    <p className="note">
                        Cher utilisateur, nous sommes ravis que vous ayez choisi notre
                        application pour répondre à vos besoins. Pour optimiser votre
                        expérience, voici quelques conseils qui vous aideront à tirer le
                        meilleur parti de notre application :
                    </p>
                </div>
                <div className="container">
                    <h2 className="titleH2">Conseils client</h2>
                    <div className="miniContainer">
                        <h3 className="titleH3">Communiquez Clairement :</h3>
                        <p className="parag">
                            Lorsque vous contactez un prestataire, expliquez clairement vos
                            exigences et attentes. Plus vous serez précis, plus le prestataire
                            pourra vous proposer une solution adaptée.
                        </p>
                    </div>
                    <div className="miniContainer">
                        <h3 className="titleH3">Le temp d’attente :</h3>
                        <p className="parag">
                            Si, au bout de deux heures, le prestataire ne réagit pas, veuillez
                            contacter un autre prestataire.
                        </p>
                    </div>
                    <div className="miniContainer">
                        <h3 className="titleH3">Le payement</h3>
                        <p className="parag">
                            Ne jamais remettre la totalité de la somme convenue sans que le
                            travail ne soit terminé.
                        </p>
                    </div>
                </div>
                <div className="container">
                    <h2 className="titleH2">Conseils prestataire</h2>
                    <div className="miniContainer">
                        <h3 className="titleH3">Communication Transparente :</h3>
                        <p className="parag">
                            Établissez une communication ouverte et transparente avec les
                            clients. Tenez-les informés de l'avancement des projets, des
                            problèmes éventuels et des solutions apportées.
                        </p>
                    </div>
                    <div className="miniContainer">
                        <h3 className="titleH3">Écoute Active :</h3>
                        <p className="parag">
                            Écoutez attentivement les préoccupations et les retours des clients.
                            Utilisez ces retours pour améliorer vos services et offrir une
                            meilleure expérience.
                        </p>
                    </div>
                    <div className="miniContainer">
                        <h3 className="titleH3">Respect des Délais :</h3>
                        <p className="parag">
                            Respectez les délais convenus avec les clients. Si des retards sont
                            inévitables, communiquez-les rapidement et proposez des solutions
                            alternatives.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConseilUsage;
