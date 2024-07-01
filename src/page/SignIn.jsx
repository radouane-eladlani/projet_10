import React from 'react';
import './../css/main.css';
import { Link } from 'react-router-dom';
import argentBankLogo from '../img/argentBankLogo.png';


const SignIn = () => {
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
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Connexion</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Nom d'utilisateur</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Mot de passe</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Se souvenir de moi</label>
            </div>
            <Link to="/user" className="sign-in-button">Connexion</Link>
          </form>
        </section>
      </main>

      {/* Pied de page */}
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </>
  );
};

export default SignIn;
