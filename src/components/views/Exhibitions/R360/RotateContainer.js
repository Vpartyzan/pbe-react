import { connect } from "react-redux";
import Rotate360 from "./Rotate360";

const mapStateToProps = (state) => ({
  currentRegion: state.state.currentRegion,
  activeExhibition: state.state.activeExhibition,
});

export default connect(mapStateToProps)(Rotate360);
