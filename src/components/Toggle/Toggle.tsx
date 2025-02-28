import React from 'react';
import { ToggleProps } from './types';


const Toggle: React.FC<ToggleProps> = ({
  checked,
  defaultChecked = false,
  onChange,
  onFocus,
  onBlur,
  name,
  value,
  id,
  icons,
  'aria-labelledby': ariaLabelledBy,
  'aria-label': ariaLabel,
  disabled,
  className,
  theme = 'ios',
  frontText, // Text to display on the left of the toggle
  backText,  // Text to display on the right of the toggle
}) => {
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    if (!isControlled) {
      setInternalChecked(e.target.checked);
    }
    onChange?.(e);
  };

  const isChecked = isControlled ? checked : internalChecked;

  return (
    <div className={`react-toggly-container ${className || ''}`}>
      {/* Front text (left side) */}
      {frontText && <span className="react-toggly__front-text">{frontText}</span>}

      {/* Toggle switch */}
      <label
        className={`react-toggly__wrapper react-toggly__wrapper--${theme} ${
          disabled ? 'react-toggly__wrapper--disabled' : ''
        }`}
      >
        <input
          type="checkbox"
          className="react-toggly__input"
          checked={isChecked}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          name={name}
          value={value}
          id={id}
          aria-labelledby={ariaLabelledBy}
          aria-label={ariaLabel}
          disabled={disabled}
        />
        <span className="react-toggly__slider">
          {icons?.checked && isChecked && (
            <div className="react-toggly__icon-wrapper react-toggly__checked-icon">
              {icons.checked}
            </div>
          )}
          {icons?.unchecked && !isChecked && (
            <div className="react-toggly__icon-wrapper react-toggly__unchecked-icon">
              {icons.unchecked}
            </div>
          )}
        </span>
      </label>

      {/* Back text (right side) */}
      {backText && <span className="react-toggly__back-text">{backText}</span>}
    </div>
  );
};

export default Toggle;