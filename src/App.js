import './App.css';
import Header from './components/Header/Header';
import MenuBar from './components/Menu_Bar/MenuBar';
import {Route} from "react-router-dom"
import Videos from "./components/Content/Videos/Videos";
import Images from "./components/Content/Images/Images";
import Friends from "./components/Content/Friends/Friends";
import Messages_Container from "./components/Messages/Messages_Container";
import NewsfeedContainer from "./components/Newsfeed/NewsfeedContainer";

const App = () => {
    return (
            <div className="container">
                <div className='header'>
                    <Header/>
                </div>
                <div className='content'>
                    <div className='menu_bar'>
                        <MenuBar/>
                    </div>
                    <div className='newsfeed'>
                        <Route exact path='/newsfeed'
                               render={() => <NewsfeedContainer/>}/>
                        <Route path='/messages' render={() => <Messages_Container/>}/>
                        <Route path='/friends' render={() => <Friends/>}/>
                        <Route path='/images' render={() => <Images/>}/>
                        <Route path='/videos' render={() => <Videos/>}/>
                    </div>
                </div>
            </div>
    );
}
export default App;
