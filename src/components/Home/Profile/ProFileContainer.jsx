import React from 'react';
import ProFile from "./ProFile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setUsersProfile} from "../../../redux/CreatePostReduser";
import {withRouter} from "react-router-dom";

class ProFileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) { userId =2}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUsersProfile(response.data)
            })
    }
    render() {
        return (
            <ProFile profile={this.props.profile} profilePage={this.props.profilePage} login={this.props.login}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        profile: state.profilePage.profile,
        login: state.auth.login,
    }
}
let WithUrlData = withRouter (ProFileContainer);

export  default connect(mapStateToProps, {setUsersProfile})(WithUrlData);