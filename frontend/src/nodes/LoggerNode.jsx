import React from 'react';
import { BaseNode } from './BaseNode';
import { useReactFlow } from 'reactflow';
import { DeleteButton } from '../Components/DeleteButton';

export const LoggerNode = ({ id }) => {
    const { deleteElements } = useReactFlow();

    const handleDelete = () => {
        deleteElements({ nodes: [{ id }] });
    };

    return (
        <div style={{ position: 'relative' }}>
            <DeleteButton onClick={handleDelete} />

            <BaseNode id={id} label="Logger" inputs={['log']} outputs={[]}>
                <div style={{ fontSize: '14px', color: '#555', paddingTop: '4px' }}>
                    Logs data to console
                </div>
            </BaseNode>
        </div>
    );
};
