import React from 'react';

export default function LocationAdder({
    location
}) {
    return (
        <option value={location}>{location}</option>
    );
}