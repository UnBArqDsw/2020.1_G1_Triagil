
import { connect } from 'react-redux';
import NurseTriageScreen from '../Screens/Nurse/NurseTriagePatientScreen';
import {resetSession} from '../actions/userActions';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => {
    return {
        resetSession: () => dispatch(resetSession()),
    };
};
  

const NurseTriagePatientContainer = connect(mapStateToProps, mapDispatchToProps)(NurseTriageScreen);

export default NurseTriagePatientContainer;