import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters('All', '');
      setCharacters(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h3>Characters</h3>
      {characters.map((character) => (
        <p key={character.id}>{character.name}</p>
      ))}
    </div>
  );
}
