
import { connect } from 'react-redux';
import PatientHome from '../Screens/Patient/PatientHomeScreen';

const mapStateToProps = (state) => ({
  cpf: state.patient.cpf,
  name: state.patient.name,
  email: state.patient.email,
  password: state.patient.password,
  provider: state.provider,
});

const ResellerHomeContainer = connect(mapStateToProps, null)(PatientHome);

export default ResellerHomeContainer;