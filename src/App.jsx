import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import Header from './components/header/Header';
import { fetchFoodSlice } from './store/foodifySlice';
import FoodPage from './components/foodPage/FoodPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoodSlice());
  }, []);

  return (
    <div className="App">
      <Header />
      <FoodPage />
    </div>
  );
}

export default App;
