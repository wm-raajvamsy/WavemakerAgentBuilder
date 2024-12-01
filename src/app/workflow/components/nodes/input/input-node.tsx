import React, { useState } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { FiArrowRight, FiEdit, FiInfo, FiX } from 'react-icons/fi';
import { LuArrowRightCircle } from "react-icons/lu";

import './input-node.css';

interface InputNodeData {
  id: string;
  label: string;
  value: string;
  onDelete?: (id: string) => void;
}

export default function InputNode({ data, id, selected, isConnectable }: NodeProps<InputNodeData>) {
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
    <div className={`input-node ${selected ? 'selected' : ''}`}>
      <div className="input-node-header">
        <span className="input-node-icon">
          <LuArrowRightCircle />
        </span>
        <span className="input-node-title">{label}</span>
        <span className="input-node-tag">inp-{data.id}</span>
        <div className="input-node-controls">
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
        className="input-node-textarea"
        placeholder={`Value for {inp-${data.id}}`}
        value={value}
        onChange={handleValueChange}
      />
      <Handle type="source" position={Position.Right} isConnectable={isConnectable} />
    </div>
  );
}