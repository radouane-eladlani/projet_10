import React from 'react';
import { Link } from 'react-router-dom';
import './../css/main.css';
import argentBankLogo from '../img/argentBankLogo.png';
import Acount from '../composant/Acount.jsx';


const User = () => {
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
          <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            Tony
          </Link>
          <Link className="main-nav-item" to="/">
            <i className="fa fa-sign-out"></i>
            Déconnexion
          </Link>
        </div>
      </nav>

      {/* Contenu principal */}
      <main className="main bg-dark">
        <div className="header">
          <h1>Bon retour<br />Tony Jarvis !</h1>
          <button className="edit-button">Modifier le nom</button>
        </div>
        <h2 className="sr-only">Comptes</h2>
        <Acount title="Compte courant Argent Bank" amount="$2,082.79" amountDescription="Solde disponible"/>
         <Acount title="Compte épargne Argent Bank" amount="$10,928.42" amountDescription="Solde disponible"/>
         <Acount title="Carte de crédit Argent Bank" amount="$184.30" amountDescription="Solde actuel"/>
         
      </main>

      {/* Pied de page */}
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </>
  );
};

export default User;
