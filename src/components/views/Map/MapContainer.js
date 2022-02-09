import { connect } from "react-redux";
import Map from "./Map";

const getContent = ({ exhibitions }, currentLanguage) =>
  exhibitions.filter((exhibitions) => exhibitions.language === currentLanguage);

const mapStateToProps = (state) => ({
  textContent: getContent(state.textContent, state.textContent.currentLanguage),
});

export default connect(mapStateToProps)(Map);
