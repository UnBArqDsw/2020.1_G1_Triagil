
import { connect } from 'react-redux';
import PatientHome from '../Screens/Patient/PatientHomeScreen';

const mapStateToProps = (state) => ({
  name: state.user.patient.name,
  email: state.user.patient.email,
  cpf: state.user.patient.cpf,
  password: state.user.patient.password,
  provider: state.user.patient.provider,
  //password_hash: state.user.patient.passwordHash,
});

const ResellerHomeContainer = connect(mapStateToProps, null)(PatientHome);

export default ResellerHomeContainer;