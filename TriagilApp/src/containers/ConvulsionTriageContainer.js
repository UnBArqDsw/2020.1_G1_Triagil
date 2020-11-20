
import { connect } from 'react-redux';
import ConvulsionTriage from '../Screens/Nurse/Triage/ConvulsionTriageScreen';
import {convulsionTriage} from '../actions/triageActions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
  return {
    convulsionTriage: (convulsionInfo) => dispatch(convulsionTriage(convulsionInfo)),
  };
};

const ConvulsionTriageContainer = connect(mapStateToProps, mapDispatchToProps)(ConvulsionTriage);

export default ConvulsionTriageContainer;