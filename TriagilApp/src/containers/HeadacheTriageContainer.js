
import { connect } from 'react-redux';
import HeadacheTriage from '../Screens/Nurse/Triage/HeadacheTriageScreen';
import {headacheTriage} from '../actions/userActions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
  return {
    headacheTriage: (headacheInfo) => dispatch(headacheTriage(headacheInfo)),
  };
};

const HeadacheTriageContainer = connect(mapStateToProps, mapDispatchToProps)(HeadacheTriage);

export default HeadacheTriageContainer;