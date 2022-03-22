import React from 'react';

export default function Filter({ race, setRace }) {
  return (
    <select value={race} onChange={(e) => setRace(e.target.value)}>
      <option value="All">All</option>
      <option value="Dwarf">Dwarf</option>
      <option value="Elf">Elf</option>
      <option value="Hobbit">Hobbit</option>
      <option value="Human">Human</option>
      <option value="Maiar">Maiar</option>
      <option value="Orc">Orc</option>
    </select>
  );
}
