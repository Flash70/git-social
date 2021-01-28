import React from 'react';
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/CreatePostReduser";
import Home from "./Home";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";



class HomeContainer extends React.Component {

    render() {
        return (
            <Home {...this.props} profilePage={this.props.profilePage}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        profilePage: state.profilePage,
    }
}
export default compose (withAuthRedirect, connect(mapStateToProps, {setUsersProfile}))(HomeContainer)

