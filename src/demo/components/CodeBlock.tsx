import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string; // Optional, not used in this version
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const formattedCode = code.trim();

  return (
    <div className="code-block">
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto">
        <code className="language-javascript">
          {formattedCode.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < formattedCode.split('\n').length - 1 && '\n'}
            </React.Fragment>
          ))}
        </code>
      </pre>
    </div>
  );
};