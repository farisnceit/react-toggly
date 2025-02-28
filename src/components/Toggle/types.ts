import React from 'react';

export type ToggleTheme = 'ios' | 'bootstrap' | 'tailwind';

export interface ToggleProps {
  /**
   * If true, the toggle is checked. Use for controlled components.
   */
  isChecked?: boolean;

  /**
   * If true on initial render, the toggle is checked. Use for uncontrolled components.
   */
  defaultIsChecked?: boolean;

  /**
   * Callback invoked when the toggle state changes.
   */
  onToggleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Callback invoked when the toggle gains focus.
   */
  onToggleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * Callback invoked when the toggle loses focus.
   */
  onToggleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * The name attribute of the input element.
   */
  inputName?: string;

  /**
   * The value attribute of the input element.
   */
  inputValue?: string;

  /**
   * The id attribute of the input element.
   */
  inputId?: string;

  /**
   * Custom icons for the checked and unchecked states.
   */
  customIcons?: {
    checked?: React.ReactNode;
    unchecked?: React.ReactNode;
  };

  /**
   * The aria-labelledby attribute of the input element.
   */
  ariaLabelledBy?: string;

  /**
   * The aria-label attribute of the input element.
   */
  ariaLabel?: string;

  /**
   * If true, the toggle is disabled.
   */
  isDisabled?: boolean;

  /**
   * Custom class name for the container.
   */
  containerClassName?: string;

  /**
   * The theme to apply to the toggle.
   */
  toggleTheme?: ToggleTheme;

  /**
   * Text or React node to display on the left of the toggle.
   */
  leftLabel?: React.ReactNode;

  /**
   * Text or React node to display on the right of the toggle.
   */
  rightLabel?: React.ReactNode;
}