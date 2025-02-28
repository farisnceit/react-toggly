import React$1 from 'react';

type Theme = 'ios' | 'bootstrap' | 'tailwind';
interface ToggleProps {
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

declare const Toggle: React$1.FC<ToggleProps>;

export { type ToggleProps, Toggle as default };
