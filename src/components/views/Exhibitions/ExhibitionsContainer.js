import { connect } from "react-redux";
import Exhibitions from "./Exhibitions";

import { changeExhibition, changeAmountImage } from "../../../redux/stateRedux";

const getExhibitions = ({ regions }, currentRegion) =>
  regions.filter((region) => region.name === currentRegion);

const mapStateToProps = (state) => ({
  content: getExhibitions(state.content, state.state.currentRegion),
  currentLanguage: state.state.currentLanguage,
  currentRegion: state.state.currentRegion,
  activeExhibition: state.state.activeExhibition,
});

const mapDispatchToProps = (dispatch) => ({
  changeExhibition: (ExhibitionId) => dispatch(changeExhibition(ExhibitionId)),
  changeAmountImage: (amountImage) => dispatch(changeAmountImage(amountImage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Exhibitions);
