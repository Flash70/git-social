// import React from 'react';
// import * as axios from "axios";
// import UsersFriends from "./UsersFriends";
//
//
// class UsersFriendsClass extends React.Component {
//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&coun=${this.props.pageSize}`)
//             .then(response => {
//                 this.props.setUsers(response.data.items)
//                 this.props.setTotalUsersCount(response.data.totalCount)
//             })
//     }
//
//     onPageChanged = (pageNumber) => {
//         this.props.setCurrentPage(pageNumber)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&coun=${this.props.pageSize}`)
//             .then(response => (this.props.setUsers(response.data.items)))
//     }
//
//     render() {
//
//         return <UsersFriends totalUsersCount={this.props.totalUsersCount}
//                              pageSize={this.props.pageSize}
//                              currentPage={this.props.currentPage}
//                              onPageChanged={this.onPageChanged}
//                              users={this.props.users}
//                              unfollow={this.props.unfollow}
//                              follow={this.props.follow}/>
//     }
// }
//
//
// export default UsersFriendsClass;