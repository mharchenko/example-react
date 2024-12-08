import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import User from './components/User/User';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import usersData from './assets/users.json';
import styles from './App.module.css';
import img from './assets/react.png';
import Button from './components/Button/Button';
import { FcApproval } from 'react-icons/fc';
import Modal from './components/Modal/Modal';
import Message from './components/Message/Message';

const App = () => {
  // const isOnline = true;
  // const isLoggedIn = true;
  // const message = 'Hello react! I am Mexty!';
  return (
    <>
      <Header />
      <Modal title="Test modal">AAAAAAAAAAAAAA</Modal>
      <Modal title="Logout">
        <div>
          <button>YES</button>
          <button>NO</button>
        </div>
      </Modal>
      <Modal>Продам холодильник</Modal>
      <Modal>
        <Message />
      </Modal>
      <Button>Click</Button>
      <Button>
        <FcApproval /> Done!
      </Button>
      <h2 className="title">Lesson2 Styles</h2>
      {/* <h3>Tag</h3>
      {isOnline && <h2>Hello world</h2>}
      {isLoggedIn && <h2>Welcome</h2>}
      <p> {message} </p> */}
      {/* <WelcomeSection />
      <Footer /> */}
      {/* <Message message="Hello gay" />
      <Message autor="Maxim" message="Hello world" isOnline={false} />
      <Message autor="Petro" message="Aloha" /> */}
      {/* <ul>
        {[1, 2, 3, 4, 5].map((value) => (
          <li>{value}</li>
        ))}
      </ul> */}
      {/* <User />
      {usersData.map((user) => (
        <User name={user.name} />
      ))} */}
      {/* <User /> */}
      <ul className="wrapper">
        {usersData.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
      <div className={styles.wrapper}>
        <div className={styles.box1}>box1</div>
        <div className={styles.box2}>box2</div>
      </div>
      <img src={img} />
      <img src="/react.png" />
    </>
  );
};

export default App;
