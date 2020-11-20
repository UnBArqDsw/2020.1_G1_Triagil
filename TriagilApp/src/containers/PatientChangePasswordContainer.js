import { connect } from 'react-redux';
import PatientChangePassword from '../Screens/Patient/PatientChangePassword';
import { updatePatientPassword } from '../actions/patientActions';

const mapStateToProps = (state) => ({
  password: state.user.patient.password,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updatePatientPassword: (patientInfo) => dispatch(updatePatientPassword(patientInfo)),
  };
};

const PatientChangeNameContainer = connect(mapStateToProps, mapDispatchToProps)(PatientChangePassword);

export default PatientChangeNameContainer;