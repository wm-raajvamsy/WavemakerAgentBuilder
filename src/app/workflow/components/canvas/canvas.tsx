'use client'
import React, { useCallback, useMemo, useState } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  ReactFlowProvider,
  NodeChange,
  EdgeChange,
  applyNodeChanges,
  applyEdgeChanges,
  Connection,
  Node,
  Edge,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";
import InputNode from "../nodes/input/input-node";
import "./canvas.css";
import CustomEdge from "../custom-edge/custom-edge";
import OutputNode from "../nodes/output/output-node";
const FLOW_KEY = "FLOW";
export default function Canvas() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [rfInstance, setRfInstance] = useState<any>(null);

  const nodeTypes = useMemo(() => ({ Input: InputNode, Output: OutputNode }), []);
  const edgeTypes = useMemo(() => ({ CustomEdge: CustomEdge }), []);

  const onNodesChange = (changes: NodeChange[]) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  };

  const onEdgesChange = (changes: EdgeChange[]) => {
    setEdges((eds) => applyEdgeChanges(changes, eds));
  };

  const onConnect = (connection: Connection) =>
    setEdges((eds) => 
      addEdge({...connection, type: 'CustomEdge'}, eds)
    );

  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (event: React.DragEvent) => {
    event.preventDefault();

    const type = event.dataTransfer.getData('text/plain');
    const position = { x: event.clientX, y: event.clientY};

    setNodes((prev) =>{
      const id = (prev.filter((p) => p.type == type).length + 1).toString();
      return prev.concat({
        id: type.toLowerCase() + id,
        type: type,
        position,
        data: { 
          id: id,
          label: type.toLowerCase(), 
          value: '', 
          onDelete: deleteNode 
        },
      })

    });
  };

  const deleteNode = (id: string) => {
    setNodes((prev) => prev.filter((node) => node.id !== id));
  };

  const onNodeDelete = (nodesToDelete: Node[]) => {
    setNodes((prev) => prev.filter((node) => 
      !nodesToDelete.some((n) => n.id === node.id)
    ));
  };

  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      localStorage.setItem(FLOW_KEY, JSON.stringify(flow));
    }
  }, [rfInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(FLOW_KEY) as string);
 
      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
      }
    };
 
    restoreFlow();
  }, [setNodes]);

  if(localStorage.getItem(FLOW_KEY) as string){
    onRestore();
  }
  return (
    <ReactFlowProvider>
      <div
        style={{ width: "100%", height: "95vh", background: "#fff" }}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        <ReactFlow
          nodeTypes={nodeTypes}
          nodes={nodes}
          edges={edges}
          edgeTypes={edgeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodesDelete={onNodeDelete}
          onInit={setRfInstance}
          fitView
        >
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}