import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import Meal from './Meal';
import ModalAddNewFood from './ModalAddNewFood';
import { fetchFoodSlice, foodActions } from '../../store/foodifySlice';

function FoodPage() {
  const dispatch = useDispatch();
  const randomMeal = useSelector((state) => state.food.randomMeal);
  const food = useSelector((state) => state.food.food);
  const likedMeals = useSelector((state) => state.food.likedMeals);

  const randomMealsLiked = (id) => {
    const foundMealRandom = randomMeal.find((item) => item.idMeal === id);
    dispatch(foodActions.handleLike(foundMealRandom));
  };

  const customMealsLiked = (idMeal) => {
    const foundMealCustom = food.find((item) => (item.idMeal === idMeal));
    dispatch(foodActions.handleLike(foundMealCustom));
  };

  return (
    <div>
      <div>
        <ModalAddNewFood />
      </div>
      <div>
        <Box sx={{ margin: 1 }}>
          <Typography variant="h5" align="left" color="#1976d2">Meals</Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <div style={{ display: 'flex' }}>
            {randomMeal.map((item) => {
              return (
                <Meal
                  key={item.idMeal}
                  food={item}
                  titleButton="skip"
                  deleteMeal={() => dispatch(fetchFoodSlice())}
                  handleLike={() => randomMealsLiked(item.idMeal)}
                />
              );
            })}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {food.map((item) => {
              return (
                <Meal
                  key={item.idMeal}
                  food={item}
                  titleButton="delete"
                  deleteMeal={() => dispatch(foodActions.removeMeal(item.idMeal))}
                  handleLike={() => customMealsLiked(item.idMeal)}
                />
              );
            })}
          </div>
        </Box>
        <Box sx={{ margin: 1 }}>
          <Typography variant="h5" align="left" color="#1976d2">Liked</Typography>
        </Box>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {likedMeals.map((item) => {
          return (
            <Meal
              key={item.idMeal}
              food={item}
              titleButton="delete"
              deleteMeal={() => dispatch(foodActions.removeLikedMeal(item.idMeal))}
              likedMeals={likedMeals}
            />
          );
        })}
      </div>
    </div>

  );
}

export default FoodPage;
