
import { connect } from 'react-redux';
import NurseHome from '../Screens/Nurse/NurseHomeScreen';

const mapStateToProps = (state) => ({
  cre: state.user.nurse.cre,
  name: state.user.nurse.name,
  email: state.user.nurse.email,
  password: state.user.nurse.password,
  provider: state.user.provider,
});

const ResellerHomeContainer = connect(mapStateToProps, null)(NurseHome);

export default ResellerHomeContainer;