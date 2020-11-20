
import { connect } from 'react-redux';
import SoreThroatTriage from '../Screens/Nurse/Triage/SoreThroatTriageScreen';
import {soreThroatTriage} from '../actions/triageActions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
  return {
    soreThroatTriage: (soreThroatInfo) => dispatch(soreThroatTriage(soreThroatInfo)),
  };
};

const SoreThroatTriageContainer = connect(mapStateToProps, mapDispatchToProps)(SoreThroatTriage);

export default SoreThroatTriageContainer;