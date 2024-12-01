import React, { useState, useEffect, useCallback } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { FiArrowRight, FiEdit, FiInfo, FiX } from 'react-icons/fi';
import { LuArrowRightCircle } from "react-icons/lu";

import './openai-node.css';

interface OpenAINodeData {
  id: string;
  label: string;
  value: string;
  onDelete?: (id: string) => void;
  showDialog?: any;
  llmConfig: { temperature: number, openAIKey: string, model?: string, systemPrompt?: string};
}
// In openai-node.tsx
export const makeOpenAICall = async (config: { 
  openAIKey: string, 
  temperature: number,
  model?: string,
  systemPrompt?: string,
  value?: string // Changed from prompt to match existing node structure
}) => {
  if (!config.openAIKey) {
    throw new Error('OpenAI API Key is required');
  }

  // Use value if available, otherwise throw an error
  if (!config.value) {
    throw new Error('Prompt (value) is required');
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.openAIKey}`
    },
    body: JSON.stringify({
      model: config.model || "gpt-4o",
      messages: [
        {
          role: "system",
          content: config.systemPrompt || "You are a helpful assistant that follows instructions precisely."
        },
        {
          role: "user",
          content: config.value
        }
      ],
      temperature: config.temperature || 0,
      max_tokens: 4098
    })
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error?.message || 'API call failed');
  }

  const result = await response.json();
  return result.choices[0].message.content;
};
export default function OpenAINode({ data, id, selected, isConnectable }: NodeProps<OpenAINodeData>) {
  const [value, setValue] = useState(data.value);
  const [label, setLabel] = useState(data.label);
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [systemPrompt, setSystemPrompt] = useState("You are a helpful assistant that follows instructions precisely.");
  const [model, setModel] = useState("gpt-4o");
  useEffect(()=>{
    data.llmConfig.model = model;
    data.llmConfig.systemPrompt = systemPrompt;
  }, [])
  // Effect to update value when data changes
  useEffect(() => {
    setValue(data.value);
  }, [data.value]);

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
    data.showDialog()
  };

  const handleDelete = () => {
    console.log(`Deleting node with id: ${id}`);
    if (confirm('Are you sure you want to delete this node?')) {
      data.onDelete?.(id);
    }
  };

  return (
    <div className={`openai-node ${selected ? 'selected' : ''}`}>
      <div className="openai-node-header">
        <span className="openai-node-icon">
          <LuArrowRightCircle />
        </span>
        <span className="openai-node-title">{label}</span>
        <span className="openai-node-tag">llm-{data.id}</span>
        <div className="openai-node-controls">
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
      <div className="container">
        <div className="model-selection">
          <label>Large Language Model</label>
          <select value={model} onChange={(e)=> {
            data.llmConfig.model = e.target.value;
            setModel(e.target.value)
          }}>
            <option>GPT-4o</option>
            <option>GPT-4o Mini</option>
          </select>
          <span className="badge">Fastest</span>
        </div>
        <div className="instructions">
          <label>Instructions</label>
          <textarea
            className="instructions-textarea"
            value={systemPrompt}
            onChange={(e)=>{
              data.llmConfig.systemPrompt = e.target.value;
              setSystemPrompt(e.target.value)
            }}
          />
        </div>
        <div className="prompt">
          <label>Prompt</label>
          <textarea
            className="context-textarea" 
            value={value}
            onChange={handleValueChange}
            placeholder="Enter your prompt here"
          />
        </div>
        {isLoading && <div className="loading">Processing...</div>}
        {error && <div className="error">{error}</div>}
        {response && (
          <div className="response">
            <label>Response:</label>
            <textarea 
              className="response-textarea" 
              value={response} 
              readOnly 
            />
          </div>
        )}
      </div>
      <Handle type="target" className="openai-handle-input" position={Position.Left} isConnectable={isConnectable} />
      <Handle type="source"  position={Position.Right} isConnectable={isConnectable} />
    </div>
  );
}