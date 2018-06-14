import React from 'react';

export default function Select({
  handleChange,
  error,
  touched,
  name,
  ...rest
}) {
  return (
    <React.Fragment>
      <select onChange={e => handleChange(name, e.target.value)} name={name} {...rest}>
        <option value="test1" key="1">Test 1</option>
        <option value="test2" key="2">Test 2</option>
        <option value="test3" key="3">Test 3</option>
        <option value="test4" key="4">Test 4</option>
      </select>
      {!!error && touched && <div className="error-messages">{error}</div>}
    </React.Fragment>
  );
}
