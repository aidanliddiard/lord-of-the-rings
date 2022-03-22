import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../../services/characters';
import Filter from '../../components/Filter';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [race, setRace] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race, '');
      setCharacters(data);
    };
    fetchData();
  }, [race]);

  return (
    <div>
      <Filter race={race} setRace={setRace} />
      <h3>Characters</h3>
      {characters.map((character) => (
        <div key={character.id}>
          <h5>{character.name}</h5>
          <p>Race: {character.race}</p>
        </div>
      ))}
    </div>
  );
}
