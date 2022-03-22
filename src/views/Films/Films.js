import React, { useEffect, useState } from 'react';
import { fetchFilms } from '../../services/films';

export default function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilms();
      setFilms(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h3>Films</h3>
      {films.map((film) => (
        <div key={film.id}>
          <h5>{film.title}</h5>
          <p>Academy Award Nominations: {film.academy_award_nominations}</p>
        </div>
      ))}
    </div>
  );
}
