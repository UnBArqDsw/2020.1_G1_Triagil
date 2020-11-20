
import { connect } from 'react-redux';
import NurseTriageScreen from '../Screens/Nurse/NurseTriagePatientScreen';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => {
    return {
    };
};
  

const NurseTriagePatientContainer = connect(mapStateToProps, mapDispatchToProps)(NurseTriageScreen);

export default NurseTriagePatientContainer;