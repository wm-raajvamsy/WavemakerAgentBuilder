
'use client';

import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import styles from './page.module.css';

// Placeholder icons
const CopyIcon = () => <span className={styles.icon}>📋</span>;
const EyeIcon = () => <span className={styles.icon}>👁️</span>;

const ApiKeyPage = () => {
  const [keys, setKeys] = useState({ publicKey: '', privateKey: '' });

  const handleGenerateKeys = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/generate-keys');
      if (response.ok) {
        const data = await response.json();
        setKeys(data);
      } else {
        console.error('Failed to generate keys');
      }
    } catch (error) {
      console.error('Error fetching keys:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainers}>
        <h4>Organization ID</h4>
        <div className={styles.inputbox}>
          <p>7c8ee59a-22a5-493f-b861-b4f71366363c</p>
          <CopyIcon />
        </div>
      </div>

      <div className={styles.subContainers}>
        <h4>Public API key (for deployment)</h4>
        <div className={styles.inputbox}>
          <p>{keys.publicKey || '••••••••••••••••••••••'}</p>
          <div className={styles.iconContainer}>
            <CopyIcon />
            <EyeIcon />
          </div>
        </div>
      </div>

      <div className={styles.subContainers}>
        <h4>Private API key (for data upload)</h4>
        <div className={styles.inputbox}>
          <p>{keys.privateKey || '••••••••••••••••••••••'}</p>
          <div className={styles.iconContainer}>
            <CopyIcon />
            <EyeIcon />
          </div>
        </div>
      </div>

      <Button onClick={handleGenerateKeys} className={styles.resetButton}>
        Reset Keys
      </Button>
    </div>
  );
};

export default ApiKeyPage;
