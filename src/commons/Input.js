import React from 'react';

export default function Input({
  handleChange,
  handleBlur,
  error,
  touched,
  name,
  ...rest
}) {
  return (
    <React.Fragment>
      <input
        onChange={handleChange}
        name={name}
        onBlur={handleBlur}
        {...rest}
      />
      {!!error && touched && <div className="error-messages">{error}</div>}
    </React.Fragment>
  );
}
