import React, { useEffect } from 'react';
import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  //const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters('All', '');
      console.log(data);
      //setCharacters(data);
    };
    fetchData();
  }, []);

  return <div>Characters</div>;
}
