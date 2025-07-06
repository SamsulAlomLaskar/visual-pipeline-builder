import React, { useState } from 'react';
import { BaseNode } from './BaseNode';
import { useReactFlow } from 'reactflow';
import { DeleteButton } from '../Components/DeleteButton';

export const MathNode = ({ id, data }) => {
    const { deleteElements } = useReactFlow();
    const [expression, setExpression] = useState(data?.expression || 'a + b');

    const handleDelete = () => {
        deleteElements({ nodes: [{ id }] });
    };

    return (
        <div style={{ position: 'relative' }}>
            <DeleteButton onClick={handleDelete} />
            <BaseNode id={id} label="Math" inputs={['a', 'b']} outputs={['result']}>
                <input
                    value={expression}
                    onChange={(e) => setExpression(e.target.value)}
                    placeholder="e.g., a + b"
                    style={{
                        width: '100%',
                        padding: '6px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '14px'
                    }}
                />
            </BaseNode>
        </div>
    );
};
