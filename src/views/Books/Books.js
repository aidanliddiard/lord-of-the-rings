import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../../services/books';

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();
      console.log(data);
      setBooks(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h3>Books</h3>
      {books.map((book) => (
        <div key={book.id}>
          <h5>{book.title}</h5>
        </div>
      ))}
    </div>
  );
}
