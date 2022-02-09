import { connect } from "react-redux";
import About from "./About";

export const getTextContent = ({ content }, currentLanguage) =>
  content.filter((content) => content.language === currentLanguage);

const mapStateToProps = (state) => ({
  textContent: getTextContent(
    state.textContent,
    state.textContent.currentLanguage
  ),
});

export default connect(mapStateToProps)(About);
