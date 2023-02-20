import React from "react";

const Textinput = ({
  lg,
  md,
  sm,
  label,
  fieldName,
  placeholder,
  handleSubmit,
  onChange,
  onBlur,
  onFocus,
  value,
  className,
  icon,
}) => {
  return (
    <div className={`form-group col-lg-${lg} col-md-${md} col-sm-${sm}`}>
      <span className={`icon ${icon}`}></span>
      <input
        type={label}
        name={fieldName}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        className={className}
      />
    </div>
  );
};

export default Textinput;
