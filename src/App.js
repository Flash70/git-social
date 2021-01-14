import './App.css';
import Header from './Header/Header';
import MenuBar from './Menu_Bar/MenuBar';
import Newsfeed from './Content/Newsfeed/Newsfeed'
import Messages from "./Content/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom"
import Videos from "./Content/Videos/Videos";
import Images from "./Content/Images/Images";
import Friends from "./Content/Friends/Friends";

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
