type Theme = 'ios' | 'bootstrap' | 'tailwind';

export interface ToggleProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  id?: string;
  icons?: {
    checked?: React.ReactNode;
    unchecked?: React.ReactNode;
  };
  'aria-labelledby'?: string;
  'aria-label'?: string;
  disabled?: boolean;
  className?: string;
  theme?: Theme;
}