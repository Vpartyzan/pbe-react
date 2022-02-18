import { connect } from "react-redux";
import Homepage from "./Homepage";

const getTextContent = ({ content }, currentLanguage) =>
  content.filter((content) => content.language === currentLanguage);

const mapStateToProps = (state) => ({
  textContent: getTextContent(state.textContent, state.state.currentLanguage),
});

export default connect(mapStateToProps)(Homepage);
