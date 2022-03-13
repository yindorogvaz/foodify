import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFoodIMG from '../assets/customFood.jpg';

export const fetchFoodSlice = createAsyncThunk(
  'food/fetchFoodSlice',
  async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await response.json();
    return data;
  },
);

const foodifySlice = createSlice({
  name: 'food',
  initialState: {
    randomMeal: [],
    food: [],
    likedMeals: [],
    status: null,
    error: null,
  },
  reducers: {
    addNewFood(state, action) {
      state.food.push({
        strMeal: action.payload.nameMeal,
        strInstructions: action.payload.receiptMeal,
        idMeal: Date.now(),
        strMealThumb: customFoodIMG,
      });
    },
    handleLike(state, action) {
      state.likedMeals.push(action.payload);
    },
    removeMeal(state, action) {
      const filtered = state.food.filter((item) => item.idMeal !== action.payload);
      state.food = filtered;
    },
    removeLikedMeal(state, action) {
      const filtered = state.likedMeals.filter((item) => item.idMeal !== action.payload);
      state.likedMeals = filtered;
    },
  },
  extraReducers: {
    [fetchFoodSlice.pending]: (state) => {
      state.status = 'loading...';
      state.error = null;
    },
    [fetchFoodSlice.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.randomMeal = [{ ...action.payload.meals[0], isLiked: false }];
    },
    [fetchFoodSlice.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export default foodifySlice.reducer;
export const foodActions = foodifySlice.actions;
