// 'use client';
// import React, { useState } from 'react';
// import { Input, Button } from '@nextui-org/react';
// import styles from "./page.module.css";
// import Layout from '../../components/layout'; // Adjust path as necessary

// const AccountsPage = () => {
//   const [email, setEmail] = useState('');
//   const [personalDetails, setPersonalDetails] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [oldPassword, setOldPassword] = useState('');

//   const handleSave = () => {
//     if (newPassword !== oldPassword) {
//       alert('New Password and Old Password must match!');
//       return;
//     }
  
//     if (newPassword.length < 8 || oldPassword.length < 8) {
//       alert('Passwords must be at least 8 characters long!');
//       return;
//     }
//   };

//   return (
//       <div style={{ marginTop: 240 }}>
//         <div className={styles.container}>
//           <div className={styles.subContainers}>
//             <h3 className={styles.heading}>Personal Information</h3>
//             <h3 className={styles.subHeading}>Update Your Email Address</h3>
//           </div>
          
//           <div className={styles.subContainers}>
//             <Input
//               style={{ width: 400, height: 28 }}
//               fullWidth
//               label="Email Address"
//               placeholder="Enter your email address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className={styles.container}>
//           <div className={styles.subContainers}>
//             <h3 style={{ marginTop: '2rem' }} className={styles.heading}>Change Password</h3>
//             <h3 className={styles.subHeading}>Update your password details.</h3>
//           </div>

//           <div className={styles.subContainers}>
//             <Input
//               style={(newPassword !== oldPassword) || (newPassword.length < 8 || oldPassword.length < 8) ? { width: 400, borderColor: 'red', height: 28 } : { width: 400, height: 28 }}
//               fullWidth
//               label="New Password"
//               placeholder="Enter new password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//             />
//             <Input
//               style={(newPassword !== oldPassword) || (newPassword.length < 8 || oldPassword.length < 8) ? { width: 400, borderColor: 'red', height: 28 } : { width: 400, height: 28 }}
//               fullWidth
//               label="Old Password"
//               placeholder="Enter old password"
//               value={oldPassword}
//               onChange={(e) => setOldPassword(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className={styles.btn}>
//           <Button
//             style={{ width: 100, marginTop: '2rem', height: 40, borderRadius: 6 }}
//             color="primary"
//             onClick={handleSave}
//           >
//             Save
//           </Button>
//         </div>
//       </div>
//   );
// };

// export default AccountsPage;


'use client';
import React, { useState } from 'react';
import { Input, Button } from '@nextui-org/react';
import styles from './page.module.css';

const AccountsPage = () => {
  const [email, setEmail] = useState('nikhil.arudala@wavemaker.com');
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');

  const handleSave = () => {
    if (newPassword !== oldPassword) {
      alert('New Password and Old Password must match!');
      return;
    }

    if (newPassword.length < 8 || oldPassword.length < 8) {
      alert('Passwords must be at least 8 characters long!');
      return;
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.infoWrapper}>
        <div>
          <h3 className={styles.heading}>Personal Information</h3>
          <p className={styles.subHeading}>Update your personal details.</p>
        </div>

        <div>
          <h3 className={styles.heading}>Email address</h3>
          <Input
            className={styles.input}
            fullWidth
            readOnly
            value={email}
          />
        </div>
      </div>

      <div className={styles.section} style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap:'40px', alignItems:'center', width:'100%', maxWidth:'800px', marginBottom:'40px' }}>
        <div>
            <h3 className={styles.heading}>Change Password</h3>
            <p className={styles.subHeading}>Update your password details.</p>
        </div>
        <div >
            <Input
            className={styles.input}
            fullWidth
            placeholder="Enter new password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            />
            <Input
            className={styles.input}
            fullWidth
            placeholder="Enter old password"
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            />
        </div>
      </div>

      <div className={styles.btn}>
        <Button color="primary" onClick={handleSave} style={{ height:'40px',borderRadius:'8px',width:'80px' }}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default AccountsPage;