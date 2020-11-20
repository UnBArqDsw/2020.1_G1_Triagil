
import { connect } from 'react-redux';
import FaintingTriage from '../Screens/Nurse/Triage/FaintingTriageScreen';
import {resetSession} from '../actions/userActions';

const mapStateToProps = (state) => ({
  //name: state.user.nurse.name,
  //cre: state.user.nurse.cre,
  //email: state.user.nurse.email,
  //password: state.user.nurse.password,
  //provider: state.user.provider,
});

const mapDispatchToProps = (dispatch) => {
  return {
    //resetSession: () => dispatch(resetSession()),
  };
};

const FaintingTriageContainer = connect(mapStateToProps, mapDispatchToProps)(FaintingTriage);

export default FaintingTriageContainer;