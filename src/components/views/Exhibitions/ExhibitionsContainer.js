import { connect } from "react-redux";
import Exhibitions from "./Exhibitions";

import { changeExhibition } from "../../../redux/stateRedux";

const getTextContent = ({ exhibitions }, currentLanguage) =>
  exhibitions.filter((exhibition) => exhibition.language === currentLanguage);

const mapStateToProps = (state) => ({
  textContent: getTextContent(state.textContent, state.state.currentLanguage),
  imageContent: state.imageContent,
  currentRegion: state.state.currentRegion,
  activeExhibition: state.state.activeExhibition,
});

const mapDispatchToProps = (dispatch) => ({
  changeExhibition: (ExhibitionId) => dispatch(changeExhibition(ExhibitionId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Exhibitions);
