import React, { useEffect } from 'react';
import { fetchBooks } from '../../services/books';

export default function Books() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();
      console.log(data);
    };
    fetchData();
  }, []);

  return <div>Books</div>;
}
