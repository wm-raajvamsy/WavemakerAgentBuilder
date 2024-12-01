import React, { useState } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { FiEdit, FiInfo, FiX } from 'react-icons/fi';
import { LuArrowRightCircle } from "react-icons/lu";

import './documents-node.css';

interface DocumentsNodeData {
  id: string;
  label: string;
  value: string;
  onDelete?: (id: string) => void;
  setDataFiles?: any;
}

export default function DocumentsNode({ data, id, selected, isConnectable }: NodeProps<DocumentsNodeData>) {
  const [value, setValue] = useState(data.value);
  const [label, setLabel] = useState(data.label);


  const handleEdit = () => {
    setLabel(prompt('Enter new label:', data.label) || data.label);
  };

  const handleInfo = () => {
    alert(`Node ID: ${id}\nLabel: ${data.label}\nValue: ${data.value}`);
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this node?')) {
      data.onDelete?.(id);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles: string[] = [];
  
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
  
        reader.onload = () => {
          console.log(`Content of file "${file.name}":`, reader.result);
          newFiles.push(reader.result as string); // Collect file content in `newFiles`
          
          // Once all files are read, update state
          if (newFiles.length === files.length) {
            data?.setDataFiles((prev: any) => {
              const updatedFiles = [...prev, ...newFiles];
              const newValue = updatedFiles.join("\n");
              data.value = newValue; // Update `data.value`
              return updatedFiles;
            });
          }
        };
  
        reader.onerror = () => {
          console.error(`Error reading file "${file.name}":`, reader.error);
        };
  
        reader.readAsText(file);
      });
    }
  };
  
  

  return (
    <div className={`documents-node ${selected ? 'selected' : ''}`}>
      <div className="documents-node-header">
        <div className="documents-node-header-left">
          <LuArrowRightCircle className="documents-node-icon" />
          <span className="documents-node-title">{label}</span>
        </div>
        <span className="documents-node-tag">doc-{data.id}</span>
        <div className="documents-node-controls">
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
      <div className="documents-node-body">
        <label className="documents-node-upload" htmlFor={`file-upload-${data.id}`}>
          <span className="upload-icon">☁️</span>
          <span className="upload-text">Click to upload</span>
        </label>
        <input
          id={`file-upload-${data.id}`}
          name="files"
          type="file"
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>
      <div className="documents-node-footer"></div>
      <Handle type="source" position={Position.Right} isConnectable={isConnectable} />
    </div>
  );
}
