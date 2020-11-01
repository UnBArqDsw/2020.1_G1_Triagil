
import { connect } from 'react-redux';
import NurseHome from '../Screens/Nurse/NurseHomeScreen';

const mapStateToProps = (state) => ({
  cre: state.nurse.cre,
  name: state.nurse.name,
  email: state.nurse.email,
  password: state.nurse.password,
  provider: state.provider,
});

const ResellerHomeContainer = connect(mapStateToProps, null)(NurseHome);

export default ResellerHomeContainer;