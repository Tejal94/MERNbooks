import React, { useState, useEffect } from 'react';
import Book from './Book';
import axios from 'axios';

const URL = "https://mernbooksbackend.onrender.com/books"

const fetchBooks = async () => {
  return axios.get(URL).then((res) => res.data)
}

const Books = () => {

  const [books, setBooks ] = useState();

  useEffect(() => {
    fetchBooks().then(data => setBooks(data));
  }, []);

  return (
    <>
      <ul>
        {
          books && books.map((book, i) => {
            return (
              <li key={i}>
                <Book book={book} />
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default Books



