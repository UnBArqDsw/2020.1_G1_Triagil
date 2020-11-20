
import { connect } from 'react-redux';
import FaintingTriage from '../Screens/Nurse/Triage/FaintingTriageScreen';
import {faintingTriage} from '../actions/triageActions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
  return {
    faintingTriage: (faintingInfo) => dispatch(faintingTriage(faintingInfo)),
  };
};

const FaintingTriageContainer = connect(mapStateToProps, mapDispatchToProps)(FaintingTriage);

export default FaintingTriageContainer;