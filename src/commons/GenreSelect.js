import React from 'react';
import GenreAdder from './GenreAdder';

export default function GenreSelect({
  genres,
  handleChange,
  error,
  touched,
  name,
  dispatch,
  ...rest
}) {
  return (
    <React.Fragment>
      <select onChange={e => handleChange(name, e.target.value)} name={name} {...rest}>
        {genres.map((obj, index) => (
          <GenreAdder key={index} {...obj} />
        ))}
      </select>
      {!!error && touched && <div className="error-messages">{error}</div>}
    </React.Fragment>
  );
}
 