import { connect } from "react-redux";
import Map from "./Map";

const getTextContent = ({ exhibitions }, currentLanguage) =>
  exhibitions.filter((exhibitions) => exhibitions.language === currentLanguage);

const mapStateToProps = (state) => ({
  textContent: getTextContent(
    state.textContent,
    state.textContent.currentLanguage
  ),
  imageContent: state.imageContent,
});

export default connect(mapStateToProps)(Map);
