import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import MenuBar from './Menu_Bar/MenuBar';
import Profile_card from './Profile_Card/profile_card';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Profile_card />
      <MenuBar />
    </div>
  );
}

export default App;
