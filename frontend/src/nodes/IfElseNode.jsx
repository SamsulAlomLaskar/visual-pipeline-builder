import React from 'react';
import { BaseNode } from './BaseNode';
import { useReactFlow } from 'reactflow';
import { DeleteButton } from '../Components/DeleteButton';

export const IfElseNode = ({ id }) => {
    const { deleteElements } = useReactFlow();

    const handleDelete = () => {
        deleteElements({ nodes: [{ id }] });
    };

    return (
        <div style={{ position: 'relative' }}>
            <DeleteButton onClick={handleDelete} />
            <BaseNode
                id={id}
                label="If / Else"
                inputs={["condition", "true", "false"]}
                outputs={["result"]}
            >
                <div style={{ padding: '4px 0', fontSize: '14px', color: '#555' }}>
                    Condition-based branching
                </div>
            </BaseNode>
        </div>
    );
};
