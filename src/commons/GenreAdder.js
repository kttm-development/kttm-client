import React from 'react';

export default function GenreAdder( {
 genre
}) {
  return (
    <option value={genre}>{genre}</option>
  );
}
