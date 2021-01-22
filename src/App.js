import './App.css';
import Header from './components/Header/Header';
import MenuBar from './components/Menu_Bar/MenuBar';
import {Route} from "react-router-dom"
import Videos from "./components/Content/Videos/Videos";
import Images from "./components/Content/Images/Images";
import Friends from "./components/Content/Friends/Friends";
import Messages_Container from "./components/Messages/Messages_Container";
import NewsfeedContainer from "./components/Newsfeed/NewsfeedContainer";
import HomeContainer from "./components/Home/HomeContainer";

const App = () => {
    return (
            <div className="container">
                <div className='header'>
                    <Header/>
                </div>
                <div className='content'>
                    <div className='workspace'>
                        <Route exact path='/newsfeed'
                               render={() => <NewsfeedContainer/>}/>
                        <Route path='/messages' render={() => <Messages_Container/>}/>
                        <Route path='/friends' render={() => <Friends/>}/>
                        <Route path='/images' render={() => <Images/>}/>
                        <Route path='/videos' render={() => <Videos/>}/>
                        <Route path='/home/:userId?' render={() => <HomeContainer/>}/>
                    </div>
                </div>
            </div>
    );
}
export default App;
