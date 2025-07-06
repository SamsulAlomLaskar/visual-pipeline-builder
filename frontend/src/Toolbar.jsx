import { DraggableNode } from './DraggableNode';

export const PipelineToolbar = () => {
    return (
        <div style={{ padding: '10px' }}>
            <div
                style={{
                    marginTop: '20px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                }}
            >
                <DraggableNode type="customInput" label="Input" />
                <DraggableNode type="llm" label="LLM" />
                <DraggableNode type="customOutput" label="Output" />
                <DraggableNode type="text" label="Text" />
                <DraggableNode type="math" label="Math" />
                <DraggableNode type="json" label="JSON Parser" />
                <DraggableNode type="logger" label="Logger" />
                <DraggableNode type="ifelse" label="If / Else" />
                <DraggableNode type="delay" label="Delay" />
            </div>
        </div>
    );
};
