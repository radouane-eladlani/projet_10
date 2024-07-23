import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import argentBankLogo from '../img/argentBankLogo.png';
import Acount from '../composant/Acount.jsx';
import { updateUserProfile } from '../redux/reducers/authReducer';
import { logout } from '../redux/reducers/authReducer';

const User = () => {
  const token = useSelector(state => state.auth.token);
  const user = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout()); // Dispatcher l'action de déconnexion
  };

  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
    }
  }, [user]);
if (!user.isAuth){
  return <Navigate to="/signin"/>
}
  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ firstName, lastName }),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const data = await response.json();
      dispatch(updateUserProfile({
        firstName: data.body.firstName,
        lastName: data.body.lastName,
      }));
      setEditMode(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img className="main-nav-logo-image" src={argentBankLogo} alt="Logo d'Argent Bank" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            {firstName || 'Utilisateur'}
          </Link>
          <Link className="main-nav-item" to="/signin" onClick={handleLogout}>
            <i className="fa fa-sign-out"></i>
            Déconnexion
          </Link>
        </div>
      </nav>

      <main className="main bg-dark">
        <div className="header">
          <h1>Bon retour<br />{firstName} {lastName} !</h1>
          {editMode ? (
            <div className="edit-form">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Prénom"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Nom"
              />
              <button onClick={handleSaveClick} className="edit-button">Sauvegarder</button>
              <button onClick={() => setEditMode(false)} className="edit-button">Annuler</button>
            </div>
          ) : (
            <>
              <button onClick={handleEditClick} className="edit-button">Modifier le nom</button>
            </>
          )}
          {error && <p className="error">{error}</p>}
        </div>
        <h2 className="sr-only">Comptes</h2>
        <Acount title="Compte courant Argent Bank" amount="$2,082.79" amountDescription="Solde disponible"/>
        <Acount title="Compte épargne Argent Bank" amount="$10,928.42" amountDescription="Solde disponible"/>
        <Acount title="Carte de crédit Argent Bank" amount="$184.30" amountDescription="Solde actuel"/>
      </main>

      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </>
  );
};

export default User;
