import React, { useState, useEffect, useRef } from 'react';
import { useReactFlow } from 'reactflow';
import { BaseNode } from './BaseNode';
import { DeleteButton } from '../components/DeleteButton';

// Function to extract variables in the format {{ variable }}
const extractVariables = (text) => {
  const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
  const vars = new Set();
  let match;
  while ((match = regex.exec(text))) {
    vars.add(match[1]);
  }
  return Array.from(vars);
};

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '');
  const [variables, setVariables] = useState(['input']); // default fallback input
  const textAreaRef = useRef(null);
  const { deleteElements } = useReactFlow();

  // Dynamically extract variables as input handles
  useEffect(() => {
    const vars = extractVariables(text);
    setVariables(vars.length > 0 ? vars : ['input']);
  }, [text]);

  // Auto resize text area height based on input
  useEffect(() => {
    const textarea = textAreaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [text]);

  const handleDelete = () => {
    deleteElements({ nodes: [{ id }] });
  };

  return (
    <div style={{ position: 'relative' }}>
      <DeleteButton onClick={handleDelete} className="text-node-delete" />

      <BaseNode id={id} label="Text" inputs={variables} outputs={['output']}>
        <textarea
          ref={textAreaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type text with {{variable}}"
          rows={1}
          style={{
            width: '93%',
            resize: 'none',
            borderRadius: '6px',
            padding: '8px',
            border: '1px solid #ccc',
            fontSize: '14px',
            fontFamily: 'inherit',
            marginTop: '6px',
            minHeight: '32px',
          }}
        />
      </BaseNode>
    </div>
  );
};
