import React, { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';

interface TemplatePageProps {
    onClose: () => void; // onClose callback passed as a prop
  }
  
  const templates = [
    {
      title: "New Project",
      description: "Start from scratch. 1 input / 1 output.",
      icon: "/plus.png",
    },
    {
      title: "Chat with Knowledge Base",
      description: "AI Assistant with knowledge over documents.",
      icon: "/searchpage.png",
    },
    {
      title: "Writing Feedback Assistant",
      description: "AI Assistant to provide feedback on essays and reports.",
      icon: "/editing.png",
    },
  ];
  
  const TemplatePage: React.FC<TemplatePageProps> = ({ onClose }) => {
    const containerRef = useRef(null);
    const [currentItem, setCurrentItem] = useState('All')
    const handleItemClick = (item: string) => {
        setCurrentItem(item);
      };
    
      const getItemStyles = () => {
        switch (currentItem) {
          case 'All':
            return { backgroundColor: '#d3d3d3', borderRadius: '10px' };
          case 'Basic':
            return { backgroundColor: '#d3d3d3', borderRadius: '10px' };
          case 'Knowledge Bases':
            return { backgroundColor: '#d3d3d3', borderRadius: '10px' };
          default:
            return {};
        }
      };
    

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.sidebar}>
        <h2>Templates</h2>
        <ul>
          <li  onClick={() => handleItemClick('All')}
            style={currentItem === 'All' ? getItemStyles() : {}}>All</li>
          <li  onClick={() => handleItemClick('Basic')}
            style={currentItem === 'Basic' ? getItemStyles() : {}}>Basic</li>
          <li  onClick={() => handleItemClick('Knowledge Bases')}
            style={currentItem === 'Knowledge Bases' ? getItemStyles() : {}}>Knowledge Bases</li>
        </ul>
      </div>
      <div className={styles.main}>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search templates" />
          <button>🔍</button>
          <img className={styles.cross} onClick={onClose} src='/x-mark.png'></img>
        </div>
        <div className={styles.templates}>
          {templates.map((template, index) => (
            <div key={index} className={styles.templateCard}>
              <h3>{template.title}</h3>
              <p>{template.description}</p>
              <img className={styles.icon} src={template.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;

