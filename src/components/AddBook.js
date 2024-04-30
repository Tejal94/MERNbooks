import React, { useState } from 'react'
import { TextField, Box, Button, FormLabel, FormControlLabel, Checkbox } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {

  const [checked, setChecked] = useState();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    bName: "",
    author: "",
    description: "",
    price: "",
    available: "",
    image: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    sendData().then(() => navigate('/books'))
  }

  const handleChange = (e) => {
    setInput({...input, [e.target.name]: e.target.value})
    console.log(input);
  }

  const sendData = async () => {
    await axios.post('https://mernbooksbackend.onrender.com/books', {
      bName: String(input.bName),
      author: String(input.author),
      description: String(input.description),
      price: Number(input.price),
      image: String(input.image),
      available: Boolean(checked)
    }).then(res => res.data);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <Box display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          maxWidth={700}
          alignContent={'center'}
          marginLeft={'auto'}
          marginRight={'auto'}
          marginTop={10}
          alignSelf={'center'}
        >

          <FormLabel>Name: </FormLabel>
          <TextField onChange={handleChange}
            value={input.bName}
            fullWidth
            variant='outlined'
            name='bName'
          />

          <FormLabel>Author: </FormLabel>
          <TextField onChange={handleChange}
            value={input.author}
            fullWidth
            variant='outlined'
            name='author'
          />

          <FormLabel>Description: </FormLabel>
          <TextField onChange={handleChange}
            value={input.description}
            fullWidth
            variant='outlined'
            name='description'
          />

          <FormLabel>Price: </FormLabel>
          <TextField onChange={handleChange}
            value={input.price}
            fullWidth
            variant='outlined'
            name='price'
          />


          <FormLabel>Image: </FormLabel>
          <TextField onChange={handleChange}
            value={input.image}
            fullWidth
            variant='outlined'
            name='image'
          />
          <FormControlLabel control={
            <Checkbox checked={checked}
              onChange={() => setChecked(!checked)} />
          }
            label="Available:"
          />

          <Button type='submit' variant={'contained'}>Add Book</Button>

        </Box>


      </form>

    </>
  )
}

export default AddBook