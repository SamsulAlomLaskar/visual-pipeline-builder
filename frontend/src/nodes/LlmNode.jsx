import React from 'react';
import { BaseNode } from './BaseNode';
import { useReactFlow } from 'reactflow';
import { DeleteButton } from '../Components/DeleteButton';

export const LLMNode = ({ id }) => {
  const { deleteElements } = useReactFlow();

  const handleDelete = () => {
    deleteElements({ nodes: [{ id }] });
  };

  return (
    <div style={{ position: 'relative' }}>
      <DeleteButton onClick={handleDelete} />

      <BaseNode
        id={id}
        label="LLM"
        inputs={['system', 'prompt']}
        outputs={['response']}
      >
        <div style={{ fontSize: '14px', color: '#555', paddingTop: '4px' }}>
          This is a LLM.
        </div>
      </BaseNode>
    </div>
  );
};
