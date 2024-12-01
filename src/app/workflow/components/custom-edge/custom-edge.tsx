'use client';
import React, { useState } from 'react';
import {
  BaseEdge,
  EdgeLabelRenderer,
  getStraightPath,
  useReactFlow,
} from 'reactflow';
import './custom-edge.css';

export default function CustomEdge({ 
  id, 
  sourceX, 
  sourceY, 
  targetX, 
  targetY 
}: {
  id: string, 
  sourceX: number, 
  sourceY: number, 
  targetX: number, 
  targetY: number
}) {
  const { setEdges } = useReactFlow();
  const [isHovered, setIsHovered] = useState(false);

  // Calculate edge path and label position
  const [edgePath, labelX, labelY] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleMouseClick = (e: any) => {
    e.stopPropagation(); // Prevent propagation
    setEdges((eds) => eds.filter((e) => e.id !== id)); // Remove edge by id
  }

  return (
    <>
      {/* Base Edge with hover detection */}
      <svg 
        onClick={handleMouseClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <BaseEdge 
          id={id} 
          path={edgePath}
          style={{
            stroke: isHovered ? 'red' : '#b1b1b7',
            strokeWidth: isHovered ? 3 : 2,
          }}
        />
      </svg>
    </>
  );
}
