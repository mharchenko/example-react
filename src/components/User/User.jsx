import { clsx } from 'clsx';
import styles from './User.module.css';
import { FaUserCircle } from 'react-icons/fa';

const User = ({ name, email, bio, skills, isOpenToWork }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>
        {name}
        <FaUserCircle className={styles.iconUser} />
      </h3>
      <p>{email}</p>
      <p>{bio}</p>
      <p>{skills}</p>
      {/* <p
        className={`${styles.status} ${
          isOpenToWork ? styles.green : styles.red
        }`} 
      >
        {isOpenToWork ? 'Хоче працювати' : 'Не шукає роботу'}
      </p> */
      /*спосіб ручної зміни кольору при використанні тру чи фолс */}
      <p
        className={clsx(
          styles.status,
          styles.smt,
          isOpenToWork ? styles.green : styles.red
        )}
      >
        {isOpenToWork ? 'Хоче працювати' : 'Не шукає роботу'}
      </p>

      <button>Delite</button>
    </div>
  );
};

export default User;
