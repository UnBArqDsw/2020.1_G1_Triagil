
import { connect } from 'react-redux';
import PatientDeleteAccount from '../Screens/Patient/PatientDeleteAccount';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => {
    return {
    };
};
  

const PatientDeleteAccountContainer = connect(mapStateToProps, mapDispatchToProps)(PatientDeleteAccount);

export default PatientDeleteAccountContainer;