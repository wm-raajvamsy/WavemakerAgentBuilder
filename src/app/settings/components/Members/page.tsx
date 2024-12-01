
import React from 'react';
import { Button } from '@nextui-org/react';
import styles from './page.module.css';

const MembersPage: React.FC = () => {
  return (
    <div className={styles.membersContainer}>
      
      <div className={styles.inviteCard}>
        <h5>Invite Member</h5>
        <p>Invite new members by email address. Invitations expire after 1 week.</p>
        <div className={styles.inviteInputs}>
          <input type="email" placeholder="jane@example.com" className={styles.inputField} />
          <select className={styles.inputField}>
            <option>Select Role</option>
          </select>
        </div>
        <div className={styles.seatsInfo}>
          <p>Seats</p>
          <p>1 of 1 seats used</p>
        </div>
        <div className={styles.seatProgress}></div>
        <Button className={styles.inviteButton}>Invite</Button>
      </div>
      
      <div className={styles.tabs}>
        <Button className={styles.tabButton}>Members</Button>
        <Button className={styles.tabButton}>Invitations</Button>
      </div>
      
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search by Email..." className={styles.searchInput} />
        <select className={styles.filterSelect}>
          <option>All members</option>
        </select>
      </div>
      
      <div className={styles.memberList}>
        <div className={styles.memberItem}>
          <input type="checkbox" />
          <div className={styles.memberInfo}>
            <span className={styles.memberName}>Nikhil Kumar Arudala</span>
            <span className={styles.memberEmail}>nikhil.arudala@wavemaker.com</span>
          </div>
          <span className={styles.memberRole}>Admin</span>
          <span className={styles.memberOptions}>...</span>
        </div>
      </div>

      <div className={styles.selectionInfo}>
        <p>0 of 1 row(s) selected.</p>
      </div>
    </div>
  );
};

export default MembersPage;

