# react-toggly

A highly customizable and themeable toggle switch component for React, built with TypeScript. Supports multiple themes like **iOS**, **Bootstrap**, and **Tailwind CSS**, and allows for custom icons, accessibility features, and controlled/uncontrolled behavior.

![Toggle Demo](https://via.placeholder.com/600x200) <!-- Add a demo GIF/image here -->

## Features

- **Multiple Themes**: Choose from `ios`, `bootstrap`, or `tailwind` themes
- **Custom Icons**: Add custom icons for checked and unchecked states
- **Accessibility**: Full ARIA support for better accessibility
- **Controlled/Uncontrolled**: Works as both controlled and uncontrolled component
- **Labels**: Support for left and right labels (text or icons)
- **Disabled State**: Easily disable the toggle
- **TypeScript Support**: Fully typed for better developer experience

## Installation

```bash
npm install react-toggly
# or
yarn add react-toggly
```

## Styles

To use the component styles, import them in your application:

```jsx
// Import the styles in your app's entry point (e.g., App.js or index.js)
import 'react-toggly/dist/styles.css';
```

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for a list of changes and version history.

## Usage

### Basic Usage

```jsx
import ToggleSwitch from 'react-toggly';

function App() {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleToggle = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <ToggleSwitch
      isChecked={isChecked}
      onToggleChange={handleToggle}
      toggleTheme="ios"
    />
  );
}
```

### With Labels

```jsx
<ToggleSwitch
  isChecked={isChecked}
  onToggleChange={handleToggle}
  leftLabel="Off"
  rightLabel="On"
/>
```

### With Custom Icons

```jsx
<ToggleSwitch
  isChecked={isChecked}
  onToggleChange={handleToggle}
  customIcons={{
    checked: <span>✓</span>,
    unchecked: <span>✕</span>
  }}
/>
```

### Different Themes

```jsx
// iOS theme (default)
<ToggleSwitch toggleTheme="ios" />

// Bootstrap theme
<ToggleSwitch toggleTheme="bootstrap" />

// Tailwind theme
<ToggleSwitch toggleTheme="tailwind" />
```

### Uncontrolled Component

```jsx
<ToggleSwitch
  defaultIsChecked={true}
  onToggleChange={(e) => console.log('Toggle changed:', e.target.checked)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isChecked` | `boolean` | - | Controlled state of the toggle |
| `defaultIsChecked` | `boolean` | `false` | Initial state for uncontrolled usage |
| `onToggleChange` | `(e: ChangeEvent) => void` | - | Change event handler |
| `toggleTheme` | `'ios' \| 'bootstrap' \| 'tailwind'` | `'ios'` | Visual theme |
| `leftLabel` | `ReactNode` | - | Label on the left side |
| `rightLabel` | `ReactNode` | - | Label on the right side |
| `customIcons` | `{ checked?: ReactNode, unchecked?: ReactNode }` | - | Custom icons |
| `isDisabled` | `boolean` | `false` | Disable the toggle |
| `containerClassName` | `string` | - | Additional container class |
| `inputName` | `string` | - | Input name attribute |
| `inputId` | `string` | - | Input id attribute |
| `ariaLabel` | `string` | - | ARIA label |
| `ariaLabelledBy` | `string` | - | ARIA labelledby |

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to:
- Set up the development environment
- Submit pull requests
- Follow our coding standards
- Contribute to documentation

## License

MIT 