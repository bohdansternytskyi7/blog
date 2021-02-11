const FormInput = ({ handleChange, label, errorStyle, ...otherProps }) => (
  <div className='group'>
    <input
      onChange={handleChange}
      className={`form-input ${errorStyle ? 'error' : ''}`}
      {...otherProps}
    />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
