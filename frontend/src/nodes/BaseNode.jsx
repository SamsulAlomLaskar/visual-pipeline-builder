import React from 'react';
import { Handle, Position } from 'reactflow';
import './NodeStyles.css';

export const BaseNode = ({ id, label, inputs = [], outputs = [], children }) => (
    <div className="base-node">
        {/* Node Header */}
        <div className="node-header">{label}</div>

        {/* Input Handles */}
        {inputs.map((input, idx) => (
            <Handle
                key={input}
                type="target"
                position={Position.Left}
                id={`${id}-${input}`}
                className="handle"
                style={{ top: `${40 + idx * 20}px` }}
            />
        ))}

        {/* Body Content */}
        <div className="node-body">{children}</div>

        {/* Output Handles */}
        {outputs.map((output, idx) => (
            <Handle
                key={output}
                type="source"
                position={Position.Right}
                id={`${id}-${output}`}
                className="handle"
                style={{ top: `${40 + idx * 20}px` }}
            />
        ))}
    </div>
);
