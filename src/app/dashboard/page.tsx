'use client'
import React from 'react';
import styles from './page.module.css';
import { useState, useEffect } from 'react';
import Connections from '../Connections/page';
import TemplatePage from '../dialogs/page';

function Dashboard() {
  const [activeItem, setActiveItem] = useState('All'); 
  const [showTemplatePage, setShowTemplatePage] = useState(false); 
  const [lastClickedTime, setLastClickedTime] = useState<Date | null>(null); 
  const [timeAgo, setTimeAgo] = useState<string>('Just now');
  useEffect(() => {
    if (lastClickedTime) {
      const interval = setInterval(() => {
        const now = new Date();
        const diffInSeconds = Math.floor((now.getTime() - lastClickedTime.getTime()) / 1000);
  
        if (diffInSeconds < 60) {
          setTimeAgo(`${diffInSeconds} seconds ago`);
        } else if (diffInSeconds < 3600) {
          setTimeAgo(`${Math.floor(diffInSeconds / 60)} minutes ago`);
        } else if (diffInSeconds < 86400) {
          setTimeAgo(`${Math.floor(diffInSeconds / 3600)} hours ago`);
        } else {
          setTimeAgo(`${Math.floor(diffInSeconds / 86400)} days ago`);
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }
  }, [lastClickedTime]);

  const handleClick = (item: any) => { 
    setActiveItem(item); 
    setShowTemplatePage(false); 
    if (item === 'All') {
      setLastClickedTime(new Date()); 
    }
  }

  const renderButtonContent = () => { switch (activeItem) { 
    case 'Connections': 
    return '+ New Connection'; 
    case 'knowledge Bases': 
    return <img className={styles.bellicon} src="/bell.png" alt="Bell Icon"  />; default: return '+ New Project'; 
  } };
   
  const handleNewProjectClick = () => {
    if (renderButtonContent() === '+ New Project') {
      setShowTemplatePage(true); 
    }
  };
  const closeTemplatePage = () => { setShowTemplatePage(false); };

    const renderBodyContent = () => { 
      switch (activeItem) 
      { 
        case 'All': 
      return ( <div className={styles.projectCard}> 
      <div className={styles.cardheader}> 
      <div className={styles.projectTitle}>Document Knowledge Base</div> 
      <img className={styles.menuicon} src='/menu.png' alt="Menu" /> 
      </div> 
      <div className={styles.projectDetails}> <div className={styles.aiIcon}>AI</div> 
      <img className={styles.profileimage2} src='/user.png'></img>
      <span className={styles.time}>{timeAgo}</span> 
      </div> 
      </div> 
      ); 
      case 'Connections': 
      return <Connections />; 
      case 'knowledge Bases': 
      return ( <div className={styles.documentCard}> 
      <div className={styles.documentTitle}>Create a knowledge Base</div> 
      <div className={styles.documentDetails}> <span>Reuse files across different workflows.</span> </div> 
      <button className={styles.getStartedButton}>Get Started</button>
      </div> ); default: return null; } };


  return (
    <div className={styles.container} >
      <div className={styles.sidebar} >
        <div className={styles.sidebarHeader}>
          <div className={styles.leftsidebar}>
          <img src="/waveai.jpg" alt="YCodeAi" />
          <span >YCodeAi</span>
          </div>
          <button>Free</button>
        </div>
        <div className={styles.sidebarContent}>
          <div className={styles.sidebarItem1}>
            <span>Folders</span>
            <button className={styles.plusbutton}>+</button>
          </div>
          <div className={`${styles.sidebarItem2} ${activeItem === 'All' ? styles.active : ''}`} 
          onClick={() => handleClick('All')} > <img src="/foldericon.png" alt="folder icon" /> <span>All</span> </div>
          <div className={styles.sidebartab1}>
          <div className={styles.sidebarItem3}>
            <span>Your Data</span>
          </div>
          <div className={`${styles.sidebarItem4} ${activeItem === 'Connections' ? styles.active : ''}`} 
          onClick={() => handleClick('Connections')} >
          <div className={styles.lefsidebar2}>
            <img className={styles.exchangeimage} src='/exchange.png'></img>
            <span>Connections</span>
          </div>
            <img className={styles.rightarrowimage} src='/right-arrow.png'></img>
          </div>
          <div className={`${styles.sidebarItem5} ${activeItem === 'knowledge Bases' ? styles.active : ''}`} 
          onClick={() => handleClick('knowledge Bases')} >
          <div className={styles.lefsidebar2}>
          <img className={styles.exchangeimage} src='/exchange.png'></img>
            <span>Knowledge Bases</span>
            </div>
            <img className={styles.rightarrowimage2} src='/right-arrow.png'></img>
          </div>
          </div>
        </div>
        <div className={styles.sidebartab2}>
        <div className={styles.sidebarFooter}>
          <div className={styles.sidebarItem7}>
          <div className={styles.leftsidebar2}>
            <img className={styles.buffimage} src='/buff.png'></img>
            <span className={styles.upgradetext}>Upgrade</span>
          </div>
          <img className={styles.eastarrowimage} src='/north-east.png'></img>
          </div>
          <div className={styles.sidebarItem8}>
          <div className={styles.leftsidebar3}>
            <img className={styles.questionimage} src='/help.png'></img>
            <span>Help & More</span>
          </div>
          </div>
          <div className={styles.sidebarItem}>
          <div className={styles.leftsidebar3}>
          <img className={styles.profileimage} src='/user.png'></img>
            <span>Praneeth Reddy</span>
          </div>
          </div>
          </div>
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h1 className={styles.headertitle}> {activeItem} </h1>
          {activeItem === 'knowledge Bases' ? 
          ( <img className={styles.bellicon} src="/bell.png" alt="Bell Icon"  /> ) : 
          ( <button className={styles.newProjectButton}  onClick={handleNewProjectClick}> {renderButtonContent()} </button>
          )}
        </div>
        <div className={styles.search}>
          <div className={styles.leftsidebar2}>
          <img className={styles.searchimage} src='/search.png'></img>
          <input type="text" placeholder="Search projects" />
          </div>
          </div>
        <div className={activeItem === 'knowledge Bases' ? styles.database : styles.body}>
        {renderBodyContent()}
      </div>
      {showTemplatePage && ( <div> 
        <div className={styles.templatePageContent} onClick={(e) => e.stopPropagation()}> 
          <TemplatePage  onClose={closeTemplatePage}/> 
        </div> </div> 
      )}
     </div>
     </div>
  );
}

export default Dashboard;