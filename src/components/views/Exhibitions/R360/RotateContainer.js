import { connect } from "react-redux";
import Rotate360 from "./Rotate360";

const mapStateToProps = (state) => ({
  currentRegion: state.state.currentRegion,
  activeExhibition: state.state.activeExhibition,
  amountImg: +state.state.amountImg,
});

export default connect(mapStateToProps)(Rotate360);
