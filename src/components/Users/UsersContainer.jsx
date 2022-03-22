import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, getUsers } from '../../redux/users-reducer';
import Users from './UsersC';
import Preloader from '../Common/Preloader/Preloader';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api';

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    // if (this.props.users.length === 0) {
    this.props.getUsers(this.props.pageSize, this.props.currentPage);
    // }
  }

  onPageChanged = pageNumber => {
    this.props.getUsers(this.props.pageSize, pageNumber);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.usersData,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
  };
};

// const mapDispatchToProps = (dispatch) => {
//     return ({
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     })
// }
let withUrlUsersAPIComponent = withRouter(UsersAPIComponent);

export default connect(mapStateToProps, {
  follow,
  unfollow,
  getUsers,
})(withUrlUsersAPIComponent);
