
'use client';

import React from 'react';
import { Button } from '@nextui-org/react';
import styles from './page.module.css';

const BillingPage: React.FC = () => {
  return (
    <div className={styles.billingContainer}>
      
      <div className={styles.planCard}>
        <div className={styles.planHeader}>
          <h5>Current Plan</h5>
          <span className={styles.notUpgraded}>Not Upgraded</span>
        </div>
        
        <h2 className={styles.planType}>FREE</h2>
        <div className={styles.planDetails}>
          <p>Email: nikhil.arudala@wavemaker.com</p>
          <p>Organization: 7c8ee59a-22a5-493f-b861-b4f71366363c</p>
          <p>Runs: 0</p>
        </div>

        <Button className={styles.upgradeButton}>Upgrade Subscription</Button>
      </div>

      <h5 className={styles.advancedInfoTitle}>Advanced billing information</h5>
      <p className={styles.advancedInfoText}>
        Access Stripe's dedicated Billing Portal to update your credit card, download receipts, get the status of your subscription, and much more.
      </p>

      <Button className={styles.advancedButton}>Go to advanced billing</Button>
    </div>
  );
};

export default BillingPage;
