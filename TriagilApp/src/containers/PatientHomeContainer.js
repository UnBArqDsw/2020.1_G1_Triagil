
import { connect } from 'react-redux';
import PatientHome from '../Screens/Patient/PatientHomeScreen';

const mapStateToProps = (state) => ({
  cpf: state.user.patient.cpf,
  name: state.user.patient.name,
  email: state.user.patient.email,
  password: state.user.patient.password,
  provider: state.user.provider,
});

const ResellerHomeContainer = connect(mapStateToProps, null)(PatientHome);

export default ResellerHomeContainer;