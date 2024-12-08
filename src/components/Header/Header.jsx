import styles from './Header.module.css';
import icons from './../../assets/react.svg';

const Header = () => {
  return (
    <header
      className="header"

      // style={{
      //   backgroundColor: 'orange',
      //   padding: 25,
      //   color: 'greenyellow',
      //   fontSize: 25,
      //   fontWeight: 700,
      // }}
    >
      <div className={styles.title}>Logo</div>
      <img src={icons} alt="" />
    </header>
  );
};

export default Header;
