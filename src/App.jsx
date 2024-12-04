import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Message from './components/Message/Message';
import User from './components/User/User';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import usersData from './assets/users.json';

const App = () => {
  // const isOnline = true;
  // const isLoggedIn = true;
  // const message = 'Hello react! I am Mexty!';
  return (
    <>
      <Header />
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
      <User />
      {usersData.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </>
  );
};

export default App;
