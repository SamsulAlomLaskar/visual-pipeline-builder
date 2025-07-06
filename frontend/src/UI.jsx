// /ui.js
import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { InputNode } from './nodes/InputNode';
import { LLMNode } from './nodes/LlmNode';
import { OutputNode } from './nodes/OutputNode';
import { TextNode } from './nodes/TextNode';
import { MathNode } from './nodes/MathNode';
import { JsonNode } from './nodes/JsonNode';
import { LoggerNode } from './nodes/LoggerNode';
import { IfElseNode } from './nodes/IfElseNode';
import { DelayNode } from './nodes/DelayNode';
import 'reactflow/dist/style.css';

const gridSize = 20;
const proOptions = { hideAttribution: true };

const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  math: MathNode,
  json: JsonNode,
  logger: LoggerNode,
  ifelse: IfElseNode,
  delay: DelayNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const {
    nodes, edges, getNodeID, addNode,
    onNodesChange, onEdgesChange, onConnect
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => ({
    id: nodeID,
    nodeType: `${type}`
  });

  const onDrop = useCallback((event) => {
    event.preventDefault();
    const bounds = reactFlowWrapper.current.getBoundingClientRect();
    const raw = event.dataTransfer.getData('application/reactflow');
    if (!raw) return;

    const appData = JSON.parse(raw);
    const type = appData?.nodeType;
    if (!type) return;

    const position = reactFlowInstance.project({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top
    });

    const nodeID = getNodeID(type);
    addNode({
      id: nodeID,
      type,
      position,
      data: getInitNodeData(nodeID, type),
    });
  }, [reactFlowInstance]);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return (
    <div ref={reactFlowWrapper} style={{ width: '100vw', height: '70vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        proOptions={proOptions}
        snapGrid={[gridSize, gridSize]}
        connectionLineType="smoothstep"
      >
        <Background color="#aaa" gap={gridSize} />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};
