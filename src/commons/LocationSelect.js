import React from 'react';
import { connect } from 'react-redux';
import LocationAdder from './LocationAdder';

function LocationSelect({
    locations,
    handleChange,
    error,
    touched,
    name,
    dispatch,
    ...rest
}) {
    return (
        <React.Fragment>
            <input type="textbox" list="locations" onChange={e => handleChange(name, e.target.value)} name={name} {...rest} />
            <datalist id="locations">
                {locations.map((obj, index) => (
                    <LocationAdder key={index} {...obj} />
                ))}
            </datalist>
            {!!error && touched && <div className="error-messages">{error}</div>}
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    locations: state.location.locations,
});

export default connect(mapStateToProps)(LocationSelect);