import styled, { css } from 'styled-components';
import { Theme } from './types';

// Props for ToggleWrapper
interface ToggleWrapperProps {
  disabled?: boolean;
  theme: Theme;
}

// Props for Slider
interface SliderProps {
  theme: Theme;
}

// ToggleWrapper styles
export const ToggleWrapper = styled.label<ToggleWrapperProps>`
  display: inline-block;
  position: relative;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  ${({ theme }) =>
    theme === 'ios' &&
    css`
      width: 60px;
      height: 34px;
    `}

  ${({ theme }) =>
    theme === 'bootstrap' &&
    css`
      width: 50px;
      height: 24px;
    `}

  ${({ theme }) =>
    theme === 'tailwind' &&
    css`
      width: 56px;
      height: 32px;
    `}
`;

// ToggleInput styles
export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

// Slider styles
export const Slider = styled.span<SliderProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  border-radius: 34px;

  ${({ theme }) =>
    theme === 'ios' &&
    css`
      background-color: #ccc;

      &:before {
        position: absolute;
        content: '';
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;
      }
    `}

  ${({ theme }) =>
    theme === 'bootstrap' &&
    css`
      background-color: #6c757d;

      &:before {
        position: absolute;
        content: '';
        height: 20px;
        width: 20px;
        left: 2px;
        bottom: 2px;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;
      }
    `}

  ${({ theme }) =>
    theme === 'tailwind' &&
    css`
      background-color: #d1d5db;

      &:before {
        position: absolute;
        content: '';
        height: 24px;
        width: 24px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;
      }
    `}

  ${ToggleInput}:checked + & {
    ${({ theme }) =>
      theme === 'ios' &&
      css`
        background-color: #4caf50;
      `}

    ${({ theme }) =>
      theme === 'bootstrap' &&
      css`
        background-color: #0d6efd;
      `}

    ${({ theme }) =>
      theme === 'tailwind' &&
      css`
        background-color: #3b82f6;
      `}
  }

  ${ToggleInput}:checked + &:before {
    ${({ theme }) =>
      theme === 'ios' &&
      css`
        transform: translateX(26px);
      `}

    ${({ theme }) =>
      theme === 'bootstrap' &&
      css`
        transform: translateX(26px);
      `}

    ${({ theme }) =>
      theme === 'tailwind' &&
      css`
        transform: translateX(24px);
      `}
  }
`;

// IconWrapper styles
export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

// CheckedIcon styles
export const CheckedIcon = styled(IconWrapper)`
  left: 6px;
`;

// UncheckedIcon styles
export const UncheckedIcon = styled(IconWrapper)`
  right: 6px;
`;