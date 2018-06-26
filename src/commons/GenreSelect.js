import React from 'react';
import GenreAdder from './GenreAdder';

export default function GenreSelect({
  genres,
  handleChange,
  error,
  touched,
  name,
  dispatch,
  inputConversion,
  ...rest
}) {
  return (
    <React.Fragment>
      <input type="textbox" list="genres" onChange={e => handleChange(name, inputConversion(e.target.value))} name={name} {...rest} />
      <datalist id="genres">
        {genres.map((obj, index) => (
          <GenreAdder key={index} {...obj} />
        ))}
      </datalist>
      {!!error && touched && <div className="error-messages">{error}</div>}
    </React.Fragment>
  );
}