import './App.css';
import Header from './components/Header/Header';
import MenuBar from './components/Menu_Bar/MenuBar';
import Newsfeed from './components/Newsfeed/Newsfeed'
import Messages from "./components/Messages/Messages";
import {Route} from "react-router-dom"
import Videos from "./components/Content/Videos/Videos";
import Images from "./components/Content/Images/Images";
import Friends from "./components/Content/Friends/Friends";
import store from "./redux/redux_store";

const App = (props) => {
    debugger;
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
                               render={() => <Newsfeed profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                        <Route path='/messages' render={() => <Messages dispatch={props.dispatch}
                                                                        messagesPage={props.state.messagesPage}/>}/>
                        <Route path='/friends' render={() => <Friends/>}/>
                        <Route path='/images' render={() => <Images/>}/>
                        <Route path='/videos' render={() => <Videos/>}/>
                    </div>
                </div>
            </div>
    );
}
export default App;
