import React, { useState } from 'react';
import {
  Backdrop, Box, Button, Fade, Modal, TextareaAutosize, TextField, Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { foodActions } from '../../store/foodifySlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 1,
};

const styles = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '15px',
};

function ModalAddNewFood() {
  const dispatch = useDispatch();
  const [nameMeal, setNameMeal] = useState('');
  const [receiptMeal, setReceiptMeal] = useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChangeName = (e) => {
    setNameMeal(e.target.value);
  };
  const handleChangeReceipt = (e) => {
    setReceiptMeal(e.target.value);
  };
  return (
    <div>
      <Button sx={{ borderBottom: '1px solid #1976d2' }} onClick={handleOpen}>Add new food</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box sx={styles}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                Add new Food
              </Typography>
            </Box>
            <Box sx={styles}>
              <TextField id="standard-basic" label="Name" variant="standard" onChange={handleChangeName} />
            </Box>
            <Box sx={styles}>
              <TextareaAutosize
                minRows={5}
                maxRows={10}
                aria-label="maximum height"
                placeholder="Receipt"
                style={{ width: 195, resize: 'none' }}
                onChange={handleChangeReceipt}
              />
            </Box>
            <Box sx={styles}>
              <Button
                sx={{ margin: '15px' }}
                type="submit"
                variant="contained"
                onClick={() => dispatch(
                  foodActions.addNewFood(
                    {
                      nameMeal,
                      receiptMeal,
                    },
                    handleClose(),
                  ),
                )}
              >
                Add
              </Button>
              <Button sx={{ margin: '15px' }} type="submit" variant="outlined" onClick={handleClose}>Cancel</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalAddNewFood;
