/** @jsxImportSource react */
import React from 'react';
import ToggleSwitch from '../components/Toggle/Toggle';
import type { ToggleProps } from '../components/Toggle/types';
import { DemoSection } from './components/DemoSection';
import { CodeBlock } from './components/CodeBlock';

import "./Demo.css"


const Demo: React.FC = () => {
  const [isLoaded, setIsLoaded] = React.useState(true);

 

  if (!isLoaded) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="demo-container">
      {/* Header */}
      <header className="demo-header">
        <div className="header-content">
          <h1>React Toggley</h1>
          <p>
            A highly customizable toggle switch component for React with multiple themes and extensive customization options
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="demo-main">
        {/* Installation */}
        <section className="installation-section">
          <h2>Installation</h2>
          <div className="installation-grid">
            <div>
              <p className="installation-label">npm</p>
              <CodeBlock code="npm install react-toggley" language="bash" />
            </div>
            <div>
              <p className="installation-label">yarn</p>
              <CodeBlock code="yarn add react-toggley" language="bash" />
            </div>
          </div>
        </section>

        {/* Basic Usage */}
        <DemoSection
          title="Basic Usage"
          description="The most simple implementation of the toggle switch."
          code={`import ToggleSwitch from 'react-toggley';

const MyComponent = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <ToggleSwitch
      isChecked={isChecked}
      onToggleChange={(e) => setIsChecked(e.target.checked)}
    />
  );
};`}
        >
          <ToggleSwitch
            isChecked={false}
            onToggleChange={() => {}}
          />
        </DemoSection>

        {/* Themes */}
        <DemoSection
          title="Themes"
          description="Choose from three beautiful themes: iOS, Bootstrap, and Tailwind."
          code={`// iOS Theme (default)
<ToggleSwitch toggleTheme="ios" />

// Bootstrap Theme
<ToggleSwitch toggleTheme="bootstrap" />

// Tailwind Theme
<ToggleSwitch toggleTheme="tailwind" />`}
        >
          <div className="themes-container">
            <div className="theme-item">
              <ToggleSwitch toggleTheme="ios" />
              <span>iOS</span>
            </div>
            <div className="theme-item">
              <ToggleSwitch toggleTheme="bootstrap" />
              <span>Bootstrap</span>
            </div>
            <div className="theme-item">
              <ToggleSwitch toggleTheme="tailwind" />
              <span>Tailwind</span>
            </div>
          </div>
        </DemoSection>

        {/* Labels */}
        <DemoSection
          title="Labels"
          description="Add labels on either side of the toggle."
          code={`<ToggleSwitch
  leftLabel="Off"
  rightLabel="On"
  onToggleChange={(e) => console.log(e.target.checked)}
/>`}
        >
          <ToggleSwitch
            leftLabel="Off"
            rightLabel="On"
            onToggleChange={() => {}}
          />
        </DemoSection>

        {/* Custom Icons */}
        <DemoSection
          title="Custom Icons"
          description="Add custom icons for checked and unchecked states."
          code={`<ToggleSwitch
  customIcons={{
    checked: <span>✓</span>,
    unchecked: <span>✕</span>
  }}
  onToggleChange={(e) => console.log(e.target.checked)}
/>`}
        >
          <ToggleSwitch
            customIcons={{
              checked: <span>✓</span>,
              unchecked: <span>✕</span>
            }}
            onToggleChange={() => {}}
          />
        </DemoSection>

        {/* Disabled State */}
        <DemoSection
          title="Disabled State"
          description="The toggle can be disabled to prevent user interaction."
          code={`<ToggleSwitch
  isDisabled={true}
  isChecked={true}
/>`}
        >
          <div className="disabled-state-container">
            <div className="disabled-state-item">
              <ToggleSwitch isDisabled={true} isChecked={true} />
              <span>Checked</span>
            </div>
            <div className="disabled-state-item">
              <ToggleSwitch isDisabled={true} isChecked={false} />
              <span>Unchecked</span>
            </div>
          </div>
        </DemoSection>

        {/* Props Reference */}
        <section className="props-reference">
          <h2>Props Reference</h2>
          <div className="props-table-container">
            <table className="props-table">
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>isChecked</td>
                  <td>boolean</td>
                  <td>-</td>
                  <td>Controlled state of the toggle</td>
                </tr>
                <tr>
                  <td>toggleTheme</td>
                  <td>'ios' | 'bootstrap' | 'tailwind'</td>
                  <td>'ios'</td>
                  <td>Visual theme of the toggle</td>
                </tr>
                <tr>
                  <td>onToggleChange</td>
                  <td><pre>(e: ChangeEvent) => void</pre></td>
                  <td>-</td>
                  <td>Change event handler</td>
                </tr>
                <tr>
                  <td>isDisabled</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Whether the toggle is disabled</td>
                </tr>
                <tr>
                  <td>leftLabel</td>
                  <td>ReactNode</td>
                  <td>-</td>
                  <td>Label on the left side</td>
                </tr>
                <tr>
                  <td>rightLabel</td>
                  <td>ReactNode</td>
                  <td>-</td>
                  <td>Label on the right side</td>
                </tr>
                <tr>
                  <td>customIcons</td>
                  {/* <td><pre>{ checked?: ReactNode, unchecked?: ReactNode }</pre></td> */}
                  <td>-</td>
                  <td>Custom icons for toggle states</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="demo-footer">
        <p>
          React Toggley - A Modern Toggle Switch Component
        </p>
      </footer>
    </div>
  );
};

export default Demo;