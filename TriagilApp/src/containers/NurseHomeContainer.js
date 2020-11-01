
import { connect } from 'react-redux';
import NurseHome from '../Screens/Nurse/NurseHomeScreen';

const mapStateToProps = (state) => ({
  name: state.user.nurse.name,
  email: state.user.nurse.email,
  cre: state.user.nurse.cre,
  password: state.user.nurse.password,
  provider: state.user.nurse.provider,
  //password_hash: state.user.nurse.passwordHash,
});

const ResellerHomeContainer = connect(mapStateToProps, null)(NurseHome);

export default ResellerHomeContainer;