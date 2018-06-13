import React from 'react';

export default function Select({
  handleChange,
  handleBlur,
  error,
  touched,
  name,
  ...rest
}) {
  return (
    <React.Fragment>
      <select name={name} {...rest}>
        <option value="test1">Test 1</option>
        <option value="test2">Test 2</option>
      </select>
      {!!error && touched && <div className="error-messages">{error}</div>}
    </React.Fragment>
  );
}
