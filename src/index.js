import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './css/index.css';
import reportWebVitals from './reportWebVitals'; 
import SignIn from './page/SignIn'; 
import PageAccueil from './page/PageAccueil'; 
import User from './page/User'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 

const router = createBrowserRouter([
  { path: "/", element: <PageAccueil /> }, 
  { path: "/signin", element: <SignIn /> }, 
  { path: "/user", element: <User /> }, 
]);


function renderApp() {
  const rootElement = document.getElementById('root');
  
  // Vérification si l'élément root existe
  if (!rootElement) {
    console.error("Root element not found");
    return; 
  }

  
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode> 
      <RouterProvider router={router} /> {/* est utilisé pour fournir le routeur à l'application.  */}
    </React.StrictMode>
  );
}

// Appel de la fonction renderApp pour rendre l'application
renderApp();

// Mesure des performances de l'application, peut être configurée pour envoyer les résultats à une destination spécifique
// Pour en savoir plus : https://bit.ly/CRA-vitals
reportWebVitals();
