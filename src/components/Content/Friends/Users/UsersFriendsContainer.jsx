import {connect} from "react-redux";
import {follow, getUsersThunk, setCurrentPage, toggleFollowingProgress, unfollow} from "../../../../redux/FriendsReduser";
import React from "react";
import UsersFriends from "./UsersFriends";
import Preloader from "../../../common/Preloader/Preloader";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";



class UsersFriendsClass extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersFriends totalUsersCount={this.props.totalUsersCount}
                             pageSize={this.props.pageSize}
                             currentPage={this.props.currentPage}
                             onPageChanged={this.onPageChanged}
                             users={this.props.users}
                             unfollow={this.props.unfollow}
                             follow={this.props.follow}
                          followingInProgress={this.props.followingInProgress}
                          /></>
    }
}
let AuthRedirectComponent = withAuthRedirect(UsersFriendsClass);

let mapStateToProps = (state) => {
    return {
        users: state.friendsPage.users,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching,
        followingInProgress: state.friendsPage.followingInProgress,
    }
}


export default connect(mapStateToProps,{follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: getUsersThunk})(AuthRedirectComponent);
