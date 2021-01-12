import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import MenuBar from './Menu_Bar/MenuBar';
import Profile_card from './Profile_Card/profile_card';
import Create_post from "./Newsfeed/Create_post/Create_post";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Profile_card />
      <MenuBar />
      <Create_post />
    </div>
  );
}

export default App;
