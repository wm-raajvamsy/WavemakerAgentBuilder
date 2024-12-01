import React, { useState } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { FiArrowRight, FiEdit, FiInfo, FiX } from 'react-icons/fi';
import { LuArrowRightCircle } from "react-icons/lu";

import './output-node.css';

interface OutputNodeData {
    id: string;
  label: string;
  value: string;
  onDelete?: (id: string) => void;
}

export default function OutputNode({ data, id, selected, isConnectable }: NodeProps<OutputNodeData>) {
  const [value, setValue] = useState(data.value);
  const [label, setLabel] = useState(data.label);

  const handleValueChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    data.value = event.target.value;
  };

  const handleEdit = () => {
    console.log(`Editing node with id: ${id}`);
    setLabel(prompt('Enter new label:', data.label) || data.label);
  };

  const handleInfo = () => {
    console.log(`Showing info for node with id: ${id}`);
    alert(`Node ID: ${id}\nLabel: ${data.label}\nValue: ${data.value}`);
  };

  const handleDelete = () => {
    console.log(`Deleting node with id: ${id}`);
    if (confirm('Are you sure you want to delete this node?')) {
      data.onDelete?.(id);
    }
  };

  return (
    <div className={`output-node ${selected ? 'selected' : ''}`}>
        <Handle className="output-handle" type="target" position={Position.Left} isConnectable={isConnectable} />
        <div className="output-node-header">
        <span className="output-node-icon">
          <LuArrowRightCircle />
        </span>
        <span className="output-node-title">{label}</span>
        <span className="output-node-tag">out-{data.id}</span>
        <div className="output-node-controls">
          <button className="control-button" onClick={handleEdit}>
            <FiEdit />
          </button>
          <button className="control-button" onClick={handleInfo}>
            <FiInfo />
          </button>
          <button className="control-button" onClick={handleDelete}>
            <FiX />
          </button>
        </div>
      </div>
      <textarea
        className="output-node-textarea"
        placeholder={`Value for {out-${data.id}}`}
        value={value}
        onChange={handleValueChange}
      />
    </div>
  );
}