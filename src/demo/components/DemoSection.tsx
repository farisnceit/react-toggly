import React from 'react';
import { CodeBlock } from './CodeBlock';

interface DemoSectionProps {
  title: string;
  description?: string;
  code: string;
  children: React.ReactNode;
}

export const DemoSection: React.FC<DemoSectionProps> = ({
  title,
  description,
  code,
  children
}) => {
  return (
    <div className="demo-section drop-shadow-xl">
      <h2 className="demo-section-title">{title}</h2>
      {description && (
        <p className="demo-section-description">{description}</p>
      )}
      <div className="demo-section-grid">
        <div className="demo-section-preview">
          <h3 className="demo-section-preview-title">Preview</h3>
          <div className="demo-section-preview-content">
            {children}
          </div>
        </div>
        <div className="demo-section-code">
          <h3 className="demo-section-code-title">Code</h3>
          <CodeBlock code={code} />
        </div>
      </div>
    </div>
  );
};