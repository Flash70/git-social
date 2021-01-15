import './App.css';
import Header from './components/Header/Header';
import MenuBar from './components/Menu_Bar/MenuBar';
import Newsfeed from './components/Newsfeed/Newsfeed'
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom"
import Videos from "./components/Content/Videos/Videos";
import Images from "./components/Content/Images/Images";
import Friends from "./components/Content/Friends/Friends";

const App = (props) => {
    debugger;
    return (
        <BrowserRouter>
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
                               render={() => <Newsfeed profilePage={props.state.profilePage} addPost={props.addPost}
                                                       updatePostText={props.updatePostText}/>}/>
                        <Route path='/messages' render={() => <Messages addNewMessages={props.addNewMessages}
                                                                        messagesPage={props.state.messagesPage}
                                                                        updateMessagesText={props.updateMessagesText}/>}/>
                        <Route path='/friends' render={() => <Friends/>}/>
                        <Route path='/images' render={() => <Images/>}/>
                        <Route path='/videos' render={() => <Videos/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
