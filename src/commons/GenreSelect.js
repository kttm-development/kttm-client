import React from 'react';
import { connect } from 'react-redux';
import GenreAdder from './GenreAdder';

export function GenreSelect({
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
                <GenreAdder key={index}{...obj}/>
        ))}
      </select>
      {!!error && touched && <div className="error-messages">{error}</div>}
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  genres: state.genre.genres
});

export default connect(mapStateToProps)(GenreSelect);
