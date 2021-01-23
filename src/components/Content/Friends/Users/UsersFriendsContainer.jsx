import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    unfollow
} from "../../../../redux/FriendsReduser";
import React from "react";
import UsersFriends from "./UsersFriends";
import {getFollowed, getUserd} from "../../../../api/api";
import Preloader from "../../../common/Preloader/Preloader";



class UsersFriendsClass extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        getUserd(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        getUserd(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setIsFetching(false);
            })
    }

    // onFollowingChanged = () => {
    //     getFollowed(this.props.user.id)
    //         .then(data => {
    //             if (data.resultCode == 0) {
    //                 this.props.unfollow(user.id)
    //             }
    //         })
    // }

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
                          toggleFollowingProgress={this.props.toggleFollowingProgress}
                          followingInProgress={this.props.followingInProgress}
                          onFollowingChanged={this.props.onFollowingChanged}/></>
    }
}

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


export default connect(mapStateToProps,{follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching, toggleFollowingProgress})(UsersFriendsClass);
