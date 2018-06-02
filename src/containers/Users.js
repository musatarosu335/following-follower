import { connect } from 'react-redux';
import Users from '../components/Users';
import { fetchFollowingUsers } from '../actions';

const mapStateToProps = ({ followingUsers }) => ({
  followingUsers,
});

const mapDispatchToProps = dispatch => ({
  fetchFollowingUsers() {
    dispatch(fetchFollowingUsers());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
