/** @jsxImportSource react */
import React from 'react';
import ToggleSwitch from '../components/Toggle/Toggle';
import type { ToggleProps } from '../components/Toggle/types';
import { DemoSection } from './components/DemoSection';
import { CodeBlock } from './components/CodeBlock';

import "./Demo.css"


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
    <div className="demo-container pb-5">
      {/* Header bg-gradient-to-r from-blue-800 to-indigo-900 */}
      <header className="header-container pb-[300px] pt-[100px]  text-white">
        <div className="header-content">
          <h1 className='text-7xl'>React Toggly <span className='text-sm bg-white text-red-800 px-2 py-1 rounded-full'>V{import.meta.env.PACKAGE_VERSION}</span></h1>
          <p>
            A highly customizable toggle switch component for React with multiple themes and extensive customization options
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="demo-main mx-auto  mt-[-300px] z-10">

        {/* Live Preview */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Live Preview</h2>
          <div className="flex items-center justify-center min-h-[100px] bg-gray-50 rounded-lg p-6">
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

        {/* Configuration and Code Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Configuration Panel */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Configuration</h2>
            <div className="space-y-4">
              <label className="flex items-center gap-2">
                <span className="text-gray-700">Theme:</span>
                <select
                  value={config.toggleTheme}
                  onChange={(e) => setConfig(prev => ({ ...prev, toggleTheme: e.target.value as ToggleProps['toggleTheme'] }))}
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="ios">iOS</option>
                  <option value="bootstrap">Bootstrap</option>
                  <option value="tailwind">Tailwind</option>
                </select>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={config.isDisabled}
                  onChange={(e) => setConfig(prev => ({ ...prev, isDisabled: e.target.checked }))}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700">Disabled</span>
              </label>

              <label className="flex items-center gap-2">
                <span className="text-gray-700">Left Label:</span>
                <input
                  type="text"
                  value={String(config.leftLabel || '')}
                  onChange={(e) => setConfig(prev => ({ ...prev, leftLabel: e.target.value }))}
                  placeholder="Enter left label"
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center gap-2">
                <span className="text-gray-700">Right Label:</span>
                <input
                  type="text"
                  value={String(config.rightLabel || '')}
                  onChange={(e) => setConfig(prev => ({ ...prev, rightLabel: e.target.value }))}
                  placeholder="Enter right label"
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={!!config.customIcons}
                  onChange={(e) => setConfig(prev => ({
                    ...prev,
                    customIcons: e.target.checked ? {} : undefined
                  }))}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700">Show Icons (✓/✕)</span>
              </label>
            </div>
          </section>

          {/* Code Preview */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Code Preview</h2>
            <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
              <code className="text-gray-100 font-mono">{getCodePreview()}</code>
            </pre>
          </section>
        </div>

        {/* Installation */}
        <section className="installation-section mt-8">
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
            onToggleChange={() => { }}
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
            onToggleChange={() => { }}
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
            onToggleChange={() => { }}
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
                  <td><pre><code>(e: ChangeEvent) =&gt; void</code></pre></td>
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
      <footer className="demo-footer max-w-xl mx-auto uppercase rounded-t-full rounded-full drop-shadow-2xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">        
        <p>Made with ❤️ by <a href="https://github.com/farisnceit" target="_blank">M FARIZ</a>
        </p>
      </footer>
    </div>
  );
};

export default Demo;