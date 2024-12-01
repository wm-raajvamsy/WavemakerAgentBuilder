'use client';
import React, { useEffect, useState } from 'react';
import {
  BaseEdge,
  EdgeLabelRenderer,
  getSmoothStepPath,
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
  const [edgePath, setEdgePath] = useState<any>();

  // Calculate edge path and label position
  useEffect(()=>{

    const [edgePath, labelX, labelY] = getSmoothStepPath({
      sourceX,
      sourceY,
      targetX,
      targetY,
    });
    setEdgePath(edgePath);
  },[sourceX, sourceY, targetX, targetY]);

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
        style={{ width: '100%', height: '100%' }}
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
