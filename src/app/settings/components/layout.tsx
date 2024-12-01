'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import styles from './layout.module.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  const getHeaderContent = () => {
    switch (pathname) {
      case '/settings/components/Apikey':
        return {
          title: 'API Keys',
          description: 'Manage your API keys',
        };
      case '/settings/components/Accounts':
        return {
          title: 'Account',
          description: 'Manage your personal information and settings',
        };
      case '/settings/components/Billing':
        return {
          title: 'Billing',
          description: 'Manage your current plan and billing information',
        };
        case '/settings/components/Members':
          return {
            title: 'Members',
            description: 'Manage team members and invitations',
          };
      default:
        return {
          title: 'Account',
          description: 'Manage your personal information and settings',
        };
    }
  };

  const headerContent = getHeaderContent();

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logoWrapper}>
          <span className={styles.logo}>YCodeAI</span>
          <span className={styles.freeLabel}>Free</span>
        </div>
        <ul>
          <li>
            <a
              href="/settings/components/Accounts"
              className={pathname === '/settings/components/Accounts' ? styles.active : ''}
            >
              Account
            </a>
          </li>
          <li>
            <a
              href="/settings/components/Members"
              className={pathname === '/settings/components/Members' ? styles.active : ''}
            >
              Members
            </a>
          </li>
          <li>
            <a
              href="/settings/components/Apikey"
              className={pathname === '/settings/components/Apikey' ? styles.active : ''}
            >
              API Keys
            </a>
          </li>
          <li>
            <a
              href="/settings/components/Billing"
              className={pathname === '/settings/components/Billing' ? styles.active : ''}
            >
              Billing
            </a>
          </li>
        </ul>
        <a href="/" className={styles.backLink}>← Back to projects</a>
      </nav>
      <div className={styles.mainContentWrapper}>
        <header className={styles.header}>
          <h1>{headerContent.title}</h1>
          <p>{headerContent.description}</p>
        </header>
        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;