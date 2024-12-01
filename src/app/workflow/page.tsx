'use client';
import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Canvas from "./components/canvas/canvas";
import Header from "./components/header/header";
import Leftnav from "./components/LeftNav/leftnav";

export default function Home() {
  const canvasRef = useRef<any>(null);
  const [runResult, setRunResult] = useState<any[]>([]);


  const handleSave = () => {
    canvasRef.current?.onSave();
  };

  const handleRestore = () => {
    canvasRef.current?.onRestore();
  };

  const handleRun = () => {
    // Run the flow and capture the result
    const result = canvasRef.current?.onRun();
    setRunResult(result);
  };


  return (
    <div className={styles.page}>
      <Header 
        onSave={handleSave} 
        onRestore={handleRestore} 
        onRun={handleRun}
      />
      <div className={styles.pageBody}>
        <Leftnav />
        <Canvas ref={canvasRef} />
      </div>
    </div>
  );
}