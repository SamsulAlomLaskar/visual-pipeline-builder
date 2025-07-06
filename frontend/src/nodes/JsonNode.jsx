import React, { useState } from 'react';
import { BaseNode } from './BaseNode';
import { useReactFlow } from 'reactflow';
import { DeleteButton } from '../Components/DeleteButton';

export const JsonNode = ({ id, data }) => {
    const [jsonString, setJsonString] = useState(data?.json || '{"key": "value"}');
    const { deleteElements } = useReactFlow();

    const handleDelete = () => {
        deleteElements({ nodes: [{ id }] });
    };

    return (
        <div style={{ position: 'relative' }}>
            <DeleteButton onClick={handleDelete} />
            <BaseNode id={id} label="JSON Parser" inputs={["json"]} outputs={["parsed"]}>
                <textarea
                    value={jsonString}
                    onChange={(e) => setJsonString(e.target.value)}
                    rows={3}
                    style={{
                        width: '95%',
                        resize: 'vertical',
                        fontFamily: 'monospace',
                        fontSize: '13px',
                        padding: '6px',
                        borderRadius: '4px',
                        border: '1px solid #ccc'
                    }}
                />
            </BaseNode>
        </div>
    );
};
