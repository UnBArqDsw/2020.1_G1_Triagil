import { connect } from 'react-redux';
import PatientChangeEmail from '../Screens/Patient/PatientChangeEmail';
import { updatePatientEmail } from '../actions/patientActions';

const mapStateToProps = (state) => ({
  email: state.user.patient.email,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updatePatientEmail: (patientInfo) => dispatch(updatePatientEmail(patientInfo)),
  };
};

const PatientChangeEmailContainer = connect(mapStateToProps, mapDispatchToProps)(PatientChangeEmail);

export default PatientChangeEmailContainer;