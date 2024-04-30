import React from 'react';
import './books.css';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Book = (props) => {

    const {_id, bName, author, description, price, image } = props.book ;

    const deleteHandler = () => {

    }

  return (
    <>
        <div className='card'>
            <img src={image} height={300} width={200} alt='book-cover' />
            <article>By {author}</article>
            <h3>{bName}</h3>
            <p>{description}</p>
            <h2>Rs. {price}</h2>
            <Button LinkComponent={Link} to={`books/${_id}`} >Update</Button>
            <Button onClick={deleteHandler}>Delete</Button>
        </div>
    </>
  )
}

export default Book