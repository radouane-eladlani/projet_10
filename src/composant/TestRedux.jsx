
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TestRedux = () => {
  const counter = useSelector(state => state); 
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' }); 
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' }); 
  };

  return (
    <div>
      <h1>Composant de Test Redux</h1>
      <p>Compteur: {counter}</p>
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement}>Décrémenter</button>
    </div>
  );
};

export default TestRedux;
