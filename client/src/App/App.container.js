import { connect } from 'react-redux';

import {
  actionGetUserInfo,
} from 'store/actions';

import App from './App';

const mapStateToProps = (state) => ({
  user: state.User.user,
});
const mapDispatchToProps = (dispatch) => ({
  actionGetUserInfo: (payload) => dispatch(actionGetUserInfo(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
