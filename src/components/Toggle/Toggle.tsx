import React from 'react';
import { ToggleProps } from './types';

const Toggle: React.FC<ToggleProps> = ({
  isChecked,
  defaultIsChecked = false,
  onToggleChange,
  onToggleFocus,
  onToggleBlur,
  inputName,
  inputValue,
  inputId,
  customIcons,
  ariaLabelledBy,
  ariaLabel,
  isDisabled,
  containerClassName,
  toggleTheme = 'ios',
  leftLabel,
  rightLabel,
}) => {
  const isControlled = isChecked !== undefined;
  const [internalChecked, setInternalChecked] = React.useState(defaultIsChecked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isDisabled) return;
    if (!isControlled) {
      setInternalChecked(e.target.checked);
    }
    onToggleChange?.(e);
  };

  const isToggleChecked = isControlled ? isChecked : internalChecked;

  return (
    <div className={`react-toggly-container ${containerClassName || ''}`}>
      {/* Left label (text or icon) */}
      {leftLabel && <span className="react-toggly__left-label">{leftLabel}</span>}

      {/* Toggle switch */}
      <label
        className={`react-toggly__wrapper react-toggly__wrapper--${toggleTheme} ${
          isDisabled ? 'react-toggly__wrapper--disabled' : ''
        }`}
      >
        <input
          type="checkbox"
          className="react-toggly__input"
          checked={isToggleChecked}
          onChange={handleChange}
          onFocus={onToggleFocus}
          onBlur={onToggleBlur}
          name={inputName}
          value={inputValue}
          id={inputId}
          aria-labelledby={ariaLabelledBy}
          aria-label={ariaLabel}
          disabled={isDisabled}
        />
        <span className="react-toggly__slider">
          {customIcons?.checked && isToggleChecked && (
            <div className="react-toggly__icon-wrapper react-toggly__checked-icon">
              {customIcons.checked}
            </div>
          )}
          {customIcons?.unchecked && !isToggleChecked && (
            <div className="react-toggly__icon-wrapper react-toggly__unchecked-icon">
              {customIcons.unchecked}
            </div>
          )}
        </span>
      </label>

      {/* Right label (text or icon) */}
      {rightLabel && <span className="react-toggly__right-label">{rightLabel}</span>}
    </div>
  );
};

export default Toggle;