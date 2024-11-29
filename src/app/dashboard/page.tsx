'use client'
import React from 'react';
import styles from './page.module.css';
import { useState } from 'react';
import Connections from '../Connections/page';


function Dashboard() {
  const [activeItem, setActiveItem] = useState('All'); 
  const handleClick = (item) => { setActiveItem(item); };

  const renderButtonContent = () => { switch (activeItem) { 
    case 'connections': 
    return '+ New Connection'; 
    case 'knowledge Bases': 
    return <img className={styles.bellicon} src="/bell.png" alt="Bell Icon"  />; default: return '+ New Project'; } };
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
      <span className={styles.time}>34 minutes ago</span> 
      </div> 
      </div> 
      ); 
      case 'Connections': 
      return <Connections />; 
      case 'knowledge Bases': 
      return ( <div className={styles.projectCard}> 
      <div className={styles.projectTitle}>Create a knowledge Base</div> 
      <div className={styles.projectDetails}> <span>Reuse files across different workflows.</span> </div> 
      </div> ); default: return null; } };





  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <div className={styles.leftsidebar}>
          <img src="/waveai.jpg" alt="WaveAi" />
          <span >waveai</span>
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
          ( <button className={styles.newProjectButton}> {renderButtonContent()} </button>
          )}
        </div>
        <div className={styles.search}>
          <div className={styles.leftsidebar2}>
          <img className={styles.searchimage} src='/search.png'></img>
          <input type="text" placeholder="Search projects" />
          </div>
          </div>
        <div className={styles.body}>
        {/* <div className={styles.projectCard}>
          <div className={styles.cardheader}>
          <div className={styles.projectTitle}>Document Knowledge Base</div>
          <img className={styles.menuicon} src='/menu.png'></img>
          </div>
          <div className={styles.projectDetails}>
            <div className={styles.aiIcon}>AI</div>
            <span className={styles.time}>34 minutes ago</span>
          </div>
        </div> */}
        {renderBodyContent()}
      </div>
     </div>
     </div>
  );
}

export default Dashboard;