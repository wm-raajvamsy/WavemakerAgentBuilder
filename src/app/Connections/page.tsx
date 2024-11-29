import React from 'react';
import styles from './page.module.css';

const Connections = () => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Connections</th>
            <th>Created at</th>
            <th>Organizations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="6" className={styles.noResults}>
            <div className={styles.noResultsWrapper}>No results</div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.selectedRows}>0 of 0 row(s) selected</div>
    </div>
  );
};

export default Connections;
