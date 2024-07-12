import React from 'react';
import { Link } from 'react-router-dom';
import './../css/main.css';
import argentBankLogo from './../img/argentBankLogo.png';
import iconChat from './../img/icon-chat.png';
import iconMoney from './../img/icon-money.png';
import iconSecurity from './../img/icon-security.png';
import  FeatureItem  from '../composant/FeatureItem';
//import TestRedux from '../composant/TestRedux.jsx';


const PageAccueil = () => {
  return (
    <>
      {/* Barre de navigation principale */}
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Logo d'Argent Bank"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/signin">
            <i className="fa fa-user-circle"></i>
            Connexion
          </Link>
        </div>
      </nav>

      {/* Contenu principal */}
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Contenu Promu</h2>
            <p className="subtitle">Pas de frais.</p>
            <p className="subtitle">Pas de dépôt minimum.</p>
            <p className="subtitle">Taux d'intérêt élevés.</p>
            <p className="text">Ouvrez un compte épargne avec Argent Bank dès aujourd'hui !</p>
          </section>
        </div>
       {/* <div>
      <h1>Page d'Accueil</h1>
      <TestRedux />
    </div>*/}

        {/* Section des fonctionnalités */}
        <section className="features">
          <h2 className="sr-only">Fonctionnalités</h2>
          <FeatureItem icon={iconChat} alt="Chat en temps" title="Vous êtes notre priorité n°1" p="Besoin de parler à un représentant ? Vous pouvez nous contacter via notre chat 24/7 ou par téléphone en moins de 5 minutes."/>
          <FeatureItem icon={iconMoney} alt="Icône d'argent" title="Plus vous épargnez, plus le taux est élevé" p="Plus vous épargnez avec nous, plus votre taux d'intérêt sera élevé !"/>
          <FeatureItem icon={iconSecurity} alt="Icône de sécurité" title="Sécurité en laquelle vous pouvez avoir confiance" p="Nous utilisons un chiffrement de pointe pour garantir la sécurité de vos données et de votre argent."/>
        </section>
      </main>

      {/* Pied de page */}
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </>
  );
};

export default PageAccueil;
