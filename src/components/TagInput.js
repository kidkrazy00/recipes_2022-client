import React, { } from "react";

const TagInput = (props) => {

  const {
    inputType, className, disabled, onChange, label, icon, placeholder, required,
    name, type, value, aria, tabIndex, children, id, rows
  } = props;

  return (
    <>
      {inputType === 'input'
        ?
        <div className={className}>
          <label htmlFor={id}>
            {label}
          </label>
          <input
            id={id}
            onChange={onChange}
            aria-label={aria ? aria : label}
            type={type}
            value={value}
            placeholder={placeholder}
            tabIndex={tabIndex ? tabIndex : '0'}
            disabled={disabled}
            required={required}
          />
          {children}
        </div>
        : ''
      }
      {inputType === 'textarea'
        ?
        <div className={className}>
          <label htmlFor={id}>
            {label}
          </label>
          <textarea
            id={id}
            onChange={onChange}
            aria-label={aria ? aria : label}
            type={type}
            value={value}
            placeholder={placeholder}
            rows={rows}
            tabIndex={tabIndex ? tabIndex : '0'}
            disabled={disabled}
            required={required}
          />
          {children}
        </div>
        : ''
      }
    </>
  )
}

export default TagInput;