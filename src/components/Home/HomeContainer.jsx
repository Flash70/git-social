import React from 'react';
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/CreatePostReduser";
import Home from "./Home";
import {withAuthRedirect} from "../hoc/withAuthRedirect";



class HomeContainer extends React.Component {

    render() {
        return (
            <Home {...this.props} profilePage={this.props.profilePage}/>
        )
    }
}
let AuthRedirectComponent = withAuthRedirect(HomeContainer);

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        profilePage: state.profilePage,
    }
}


export default connect(mapStateToProps, {setUsersProfile})(AuthRedirectComponent)
