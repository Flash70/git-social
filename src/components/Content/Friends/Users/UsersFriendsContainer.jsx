import {connect} from "react-redux";
import {follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow} from "../../../../redux/FriendsReduser";
import React from "react";
import * as axios from "axios";
import UsersFriends from "./UsersFriends";
import preloader from "../../../img/Double.svg";

class UsersFriendsClass extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                // this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response =>
            {this.props.setUsers(response.data.items)})
    }

    render() {

        return <>
            {this.props.isFetching ? <img src={preloader} /> : null}
            <UsersFriends totalUsersCount={this.props.totalUsersCount}
                             pageSize={this.props.pageSize}
                             currentPage={this.props.currentPage}
                             onPageChanged={this.onPageChanged}
                             users={this.props.users}
                             unfollow={this.props.unfollow}
                             follow={this.props.follow}/></>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.friendsPage.users,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching,
    }
}


export default connect(mapStateToProps,{follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount})(UsersFriendsClass);
