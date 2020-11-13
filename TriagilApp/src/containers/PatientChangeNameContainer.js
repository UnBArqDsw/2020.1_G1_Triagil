import { connect } from 'react-redux';
import PatientChangeName from '../Screens/Patient/PatientChangeName';
import { updatePatientName } from '../actions/patientActions';

const mapStateToProps = (state) => ({
  name: state.user.patient.name,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updatePatientName: (patientInfo) => dispatch(updatePatientName(patientInfo)),
  };
};

const PatientChangeNameContainer = connect(mapStateToProps, mapDispatchToProps)(PatientChangeName);

export default PatientChangeNameContainer;