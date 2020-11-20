
import { connect } from 'react-redux';
import HospitalLine from '../Screens/Nurse/HospitalLineScreen';
import {resetSession} from '../actions/userActions';

const mapStateToProps = (state) => ({
  name: state.user.nurse.name,
  //cre: state.user.nurse.cre,
  //email: state.user.nurse.email,
  //password: state.user.nurse.password,
  //provider: state.user.provider,
});

const mapDispatchToProps = (dispatch) => {
  return {
    resetSession: () => dispatch(resetSession()),
  };
};

const HospitalLineContainer = connect(mapStateToProps, mapDispatchToProps)(HospitalLine);

export default HospitalLineContainer;