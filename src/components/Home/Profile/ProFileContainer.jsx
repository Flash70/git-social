import React from 'react';
import ProFile from "./ProFile";
import {connect} from "react-redux";
import {getUsersProfile} from "../../../redux/CreatePostReduser";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getStatus, getUpdateStatus} from "../../../redux/FriendsReduser";

class ProFileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) { userId = 14270}
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId)
    }
    render() {
        return (
            <ProFile profile={this.props.profile} profilePage={this.props.profilePage} login={this.props.login}
                     status={this.props.status} getUpdateStatus={this.props.getUpdateStatus}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        profile: state.profilePage.profile,
        login: state.auth.login,
        status: state.friendsPage.status
    }
}
export  default compose(connect(mapStateToProps, {getUsersProfile, getStatus, getUpdateStatus}), withRouter, withAuthRedirect)(ProFileContainer)