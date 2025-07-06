import React, { useState } from 'react';
import { BaseNode } from './BaseNode';
import { useReactFlow } from 'reactflow';
import { DeleteButton } from '../Components/DeleteButton';

export const DelayNode = ({ id, data }) => {
    const [delayMs, setDelayMs] = useState(data?.delay || 1000);
    const { deleteElements } = useReactFlow();

    const handleDelete = () => {
        deleteElements({ nodes: [{ id }] });
    };

    return (
        <div style={{ position: 'relative' }}>
            <DeleteButton onClick={handleDelete} />

            <BaseNode id={id} label="Delay" inputs={["input"]} outputs={["output"]}>
                <input
                    type="number"
                    value={delayMs}
                    onChange={(e) => setDelayMs(Number(e.target.value))}
                    placeholder="Delay (ms)"
                    style={{
                        width: '100%',
                        padding: '6px 10px',
                        fontSize: '14px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        marginTop: '8px',
                        boxSizing: 'border-box'
                    }}
                />
            </BaseNode>
        </div>
    );
};
