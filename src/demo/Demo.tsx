import React from 'react';
import ToggleSwitch from '../components/Toggle/Toggle';
import type { ToggleProps } from '../components/Toggle/types';
import './Demo.css';

const Demo: React.FC = () => {
  // Configuration state
  const [config, setConfig] = React.useState<Partial<ToggleProps>>({
    isChecked: false,
    toggleTheme: 'ios',
    leftLabel: '',
    rightLabel: '',
    isDisabled: false,
    customIcons: undefined,
  });

  // Code preview string
  const getCodePreview = () => {
    const props = [];
    if (config.isChecked !== undefined) props.push(`isChecked={${config.isChecked}}`);
    if (config.toggleTheme) props.push(`toggleTheme="${config.toggleTheme}"`);
    if (config.leftLabel) props.push(`leftLabel="${config.leftLabel}"`);
    if (config.rightLabel) props.push(`rightLabel="${config.rightLabel}"`);
    if (config.isDisabled) props.push(`isDisabled={${config.isDisabled}}`);
    if (config.customIcons) props.push(`customIcons={{ checked: "✓", unchecked: "✕" }}`);
    
    return `<ToggleSwitch\n  ${props.join('\n  ')}\n  onToggleChange={(e) => console.log('Toggle changed:', e.target.checked)}\n/>`;
  };

  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfig(prev => ({ ...prev, isChecked: e.target.checked }));
  };

  return (
    <div className="demo-container">
      <h1>React Toggley Demo</h1>
      <p>A highly customizable toggle switch component for React</p>

      <div className="demo-content">
        {/* Live Preview */}
        <section className="demo-preview">
          <h2>Live Preview</h2>
          <div className="preview-box">
            <ToggleSwitch
              {...config}
              onToggleChange={handleToggleChange}
              customIcons={config.customIcons ? {
                checked: <span>✓</span>,
                unchecked: <span>✕</span>
              } : undefined}
            />
          </div>
        </section>

        {/* Configuration Panel */}
        <section className="demo-config">
          <h2>Configuration</h2>
          <div className="config-group">
            <label>
              Theme:
              <select 
                value={config.toggleTheme} 
                onChange={(e) => setConfig(prev => ({ ...prev, toggleTheme: e.target.value as ToggleProps['toggleTheme'] }))}
              >
                <option value="ios">iOS</option>
                <option value="bootstrap">Bootstrap</option>
                <option value="tailwind">Tailwind</option>
              </select>
            </label>

            <label>
              <input
                type="checkbox"
                checked={config.isDisabled}
                onChange={(e) => setConfig(prev => ({ ...prev, isDisabled: e.target.checked }))}
              />
              Disabled
            </label>

            <label>
              Left Label:
              <input
                type="text"
                value={config.leftLabel || ''}
                onChange={(e) => setConfig(prev => ({ ...prev, leftLabel: e.target.value }))}
                placeholder="Enter left label"
              />
            </label>

            <label>
              Right Label:
              <input
                type="text"
                value={config.rightLabel || ''}
                onChange={(e) => setConfig(prev => ({ ...prev, rightLabel: e.target.value }))}
                placeholder="Enter right label"
              />
            </label>

            <label>
              <input
                type="checkbox"
                checked={!!config.customIcons}
                onChange={(e) => setConfig(prev => ({ 
                  ...prev, 
                  customIcons: e.target.checked ? {} : undefined 
                }))}
              />
              Show Icons (✓/✕)
            </label>
          </div>
        </section>

        {/* Code Preview */}
        <section className="demo-code">
          <h2>Code Preview</h2>
          <pre>
            <code>{getCodePreview()}</code>
          </pre>
        </section>
      </div>

      {/* Installation */}
      <section className="demo-installation">
        <h2>Installation</h2>
        <pre>
          <code>npm install react-toggley</code>
        </pre>
        <pre>
          <code>yarn add react-toggley</code>
        </pre>
      </section>
    </div>
  );
};

export default Demo;
