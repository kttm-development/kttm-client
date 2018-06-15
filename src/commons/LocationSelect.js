import React from 'react';
import { connect } from 'react-redux';
import LocationAdder from './LocationAdder';

function LocationSelect ({
    locations,
    handleChange,
    error,
    touched,
    name,
    ...rest
}) {
    return (
        <React.Fragment>
            <select onChange={e => handleChange(name, e.target.value)} name={name} {...rest}>
                {locations.map((obj, index) => (
                    <LocationAdder key={index} {...obj} />
                ))}
            </select>
            {!!error && touched && <div className="error-messages">{error}</div>}
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    locations: state.location.locations,
});

export default connect(mapStateToProps)(LocationSelect);