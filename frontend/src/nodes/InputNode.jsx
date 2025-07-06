import React, { useState } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import { DeleteButton } from '../Components/DeleteButton';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const { deleteElements } = useReactFlow();

  const handleDelete = () => {
    deleteElements({ nodes: [{ id }] });
  };

  return (
    <div
      style={{
        width: 220,
        border: '1px solid #ccc',
        borderRadius: '8px',
        background: '#fff',
        padding: '10px',
        fontFamily: 'sans-serif',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        position: 'relative'
      }}
    >
      <DeleteButton onClick={handleDelete} />

      <div style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '16px' }}>Input</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '14px', color: '#333' }}>
          Name:
          <input
            type="text"
            value={currName}
            onChange={e => setCurrName(e.target.value)}
            style={{
              marginTop: '4px',
              padding: '6px 8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              width: '93%',
              fontSize: '14px',
            }}
          />
        </label>

        <label style={{ fontSize: '14px', color: '#333' }}>
          Type:
          <select
            value={inputType}
            onChange={e => setInputType(e.target.value)}
            style={{
              marginTop: '4px',
              padding: '6px 8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              width: '100%',
              fontSize: '14px',
            }}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
        style={{ background: '#3b82f6' }}
      />
    </div>
  );
};
