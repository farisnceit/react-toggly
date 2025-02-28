import React from 'react';
import { ToggleProps } from './types';
import {
  ToggleWrapper,
  ToggleInput,
  Slider,
  CheckedIcon,
  UncheckedIcon,
} from './styles';

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
    <ToggleWrapper disabled={disabled} className={className} theme={theme}>
      <ToggleInput
        type="checkbox"
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
      <Slider className="slider" theme={theme}>
        {icons?.checked && isChecked && (
          <CheckedIcon>{icons.checked}</CheckedIcon>
        )}
        {icons?.unchecked && !isChecked && (
          <UncheckedIcon>{icons.unchecked}</UncheckedIcon>
        )}
      </Slider>
    </ToggleWrapper>
  );
};

export default Toggle;