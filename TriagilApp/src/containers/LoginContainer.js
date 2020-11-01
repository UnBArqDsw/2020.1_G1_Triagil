import { connect } from 'react-redux';
import Login from '../Screens/LoginScreen';
import { addUserInfo } from '../actions/userActions';
import { addPatientInfo } from '../actions/patientActions';

const mapDispatchToProps = (dispatch) => {
  return {
    addUserInfo: (userInfo) => dispatch(addUserInfo(userInfo)),
  };
};

const LoginContainer = connect(null, mapDispatchToProps)(Login);

export default LoginContainer;