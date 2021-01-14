import './App.css';
import Header from './Header/Header';
import MenuBar from './Menu_Bar/MenuBar';
import Newsfeed from './Content/Newsfeed/Newsfeed'
import Messages from "./Content/Messages/Messages";
import {Route} from "react-router-dom"
import Videos from "./Content/Videos/Videos";
import Images from "./Content/Images/Images";
import Friends from "./Content/Friends/Friends";
import store from "./redux/state";

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
                           render={() => <Newsfeed newsfeedPage={props.state.newsfeedPage} dispatch={props.dispatch}/>}/>


                    <Route path='/messages' render={() => <Messages store={props.store}/>}/>
                    <Route path='/friends' render={() => <Friends/>}/>
                    <Route path='/images' render={() => <Images/>}/>
                    <Route path='/videos' render={() => <Videos/>}/>
                </div>
            </div>
        </div>
    );
}
export default App;
