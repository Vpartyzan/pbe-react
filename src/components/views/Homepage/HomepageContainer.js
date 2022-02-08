import { connect } from "react-redux";
import Homepage from "./Homepage";

const getContent = ({ content }, currentLanguage) =>
  content.filter((content) => content.language == currentLanguage);

const mapStateToProps = (state) => ({
  textContent: getContent(state.textContent, state.textContent.currentLanguage),
});

export default connect(mapStateToProps)(Homepage);
