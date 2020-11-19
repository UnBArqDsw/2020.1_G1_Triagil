
import { connect } from 'react-redux';
import PatientHome from '../Screens/Patient/PatientHomeScreen';

const mapStateToProps = (state) => ({
  name: state.user.patient.name,
  //id: state.user.patient.id,
  //cpf: state.user.patient.cpf,
  //email: state.user.patient.email,
  //password: state.user.patient.password,
  //provider: state.user.provider,
});

const PatientHomeContainer = connect(mapStateToProps, null)(PatientHome);

export default PatientHomeContainer;