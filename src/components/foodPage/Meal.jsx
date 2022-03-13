import React from 'react';
import {
  Box, Button, Card, CardActions, CardContent, CardMedia, Typography,
} from '@mui/material';

function Meal(props) {
  const {
    strMealThumb, strMeal, strInstructions,
  } = props.food;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'start', margin: '10px' }}>
      <Card sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxWidth: 300,
        minWidth: 300,
        minHeight: 450,
        maxHeight: 450,
        border: '1px solid silver',
        margin: '5px',
      }}
      >
        <CardMedia
          component="img"
          height="150"
          image={strMealThumb}
          alt="food"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ maxHeight: 50, overflow: 'auto' }}>
            {strMeal}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ maxHeight: 150, overflow: 'auto' }}>
            {strInstructions}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={props.handleLike}>Like</Button>
          <Button size="small" onClick={props.deleteMeal}>{props.titleButton}</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Meal;
