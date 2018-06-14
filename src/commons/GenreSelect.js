import React from 'react';
import { connect } from 'react-redux';
import GenreAdder from './GenreAdder';

export function GenreSelect(props,{
  handleChange,
  error,
  touched,
  name,
  ...rest
}) {
  return (
    <React.Fragment>
      <select onChange={e => handleChange(name, e.target.value)} name={name} {...rest}>
        {props.genres.map(obj => (
                <GenreAdder {...obj} />
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
