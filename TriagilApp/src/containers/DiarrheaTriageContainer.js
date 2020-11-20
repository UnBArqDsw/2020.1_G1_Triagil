
import { connect } from 'react-redux';
import DiarrheaTriage from '../Screens/Nurse/Triage/DiarrheaTriageScreen';
import {diarrheaTriage} from '../actions/triageActions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
  return {
    diarrheaTriage: (diarrheaInfo) => dispatch(diarrheaTriage(diarrheaInfo)),
  };
};

const DiarrheaTriageContainer = connect(mapStateToProps, mapDispatchToProps)(DiarrheaTriage);

export default DiarrheaTriageContainer;