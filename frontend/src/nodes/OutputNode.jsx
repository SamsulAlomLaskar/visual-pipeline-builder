// /nodes/OutputNode.jsx
import React, { useState } from 'react';
import { BaseNode } from './BaseNode';
import { useReactFlow } from 'reactflow';
import { DeleteButton } from '../components/DeleteButton';

export const OutputNode = ({ id, data }) => {
  const { deleteElements } = useReactFlow();
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  const handleDelete = () => {
    deleteElements({ nodes: [{ id }] });
  };

  return (
    <div style={{ position: 'relative' }}>
      <DeleteButton
        onClick={handleDelete}
        style={{ top: 6, right: 10, fontSize: '18px' }} // custom style override
      />
      <BaseNode id={id} label="Output" inputs={['value']} outputs={[]}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '14px' }}>
            Name:
            <input
              type="text"
              value={currName}
              onChange={e => setCurrName(e.target.value)}
              style={{
                width: '100%',
                padding: '6px',
                marginTop: '4px',
                borderRadius: '4px',
                border: '1px solid #ccc'
              }}
            />
          </label>

          <label style={{ fontSize: '14px' }}>
            Type:
            <select
              value={outputType}
              onChange={e => setOutputType(e.target.value)}
              style={{
                width: '100%',
                padding: '6px',
                marginTop: '4px',
                borderRadius: '4px',
                border: '1px solid #ccc'
              }}
            >
              <option value="Text">Text</option>
              <option value="File">Image</option>
            </select>
          </label>
        </div>
      </BaseNode>
    </div>
  );
};
