import { connect } from "react-redux";
import Map from "./Map";

import {
  changeRegion,
  changeExhibition,
  changeAmountImage,
} from "../../../redux/stateRedux";

const getExhibitions = ({ regions }, currentRegion) =>
  regions.filter((region) => region.name === currentRegion);

const mapStateToProps = (state) => ({
  content: getExhibitions(state.content, state.state.currentRegion),
  currentRegion: state.state.currentRegion,
  currentLanguage: state.state.currentLanguage,
});

const mapDispatchToProps = (dispatch) => ({
  changeRegion: (region) => dispatch(changeRegion(region)),
  changeExhibition: (ExhibitionId) => dispatch(changeExhibition(ExhibitionId)),
  changeAmountImage: (amountImage) => dispatch(changeAmountImage(amountImage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
