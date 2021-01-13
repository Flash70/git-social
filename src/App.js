import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import MenuBar from './Menu_Bar/MenuBar';
import Newsfeed from './Newsfeed/Newsfeed'

const App = () => {
  return (
    <div className="container">
        <div className='header'>
            <Header />
        </div>
        <div className='content'>
            <div className='menu_bar'>
                <MenuBar />
            </div>
            <div className='newsfeed'>
                <Newsfeed />
            </div>
        </div>
    </div>
  );
}

export default App;
