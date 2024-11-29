
'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import styles from './layout.module.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logoWrapper}>
          <span className={styles.logo}>AgentCafe</span>
          <span className={styles.freeLabel}>Free</span>
        </div>
        <ul>
          <li>
            <a 
              href="/settings/components/accounts"
              className={pathname === '/settings/components/Accounts' ? styles.active : ''}
            >
              Accounts
            </a>
          </li>
          <li>
            <a 
              href="/settings/components/members"
              className={pathname === '/settings/components/members' ? styles.active : ''}
            >
              Members
            </a>
          </li>
          <li>
            <a 
              href="/settings/components/apikeys"
              className={pathname === '/settings/components/Apikey' ? styles.active : ''}
            >
              API Keys
            </a>
          </li>
          <li>
            <a 
              href="/settings/components/billing"
              className={pathname === '/settings/components/billing' ? styles.active : ''}
            >
              Billing
            </a>
          </li>
        </ul>
        <a href="/" className={styles.backLink}>← Back to projects</a>
      </nav>
      <div className={styles.mainContentWrapper}>
        <header className={styles.header}>
          <h1>Account</h1>
          <p>Manage your personal information and settings</p>
        </header>
        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;