import { connect } from "react-redux";
import Contact from "./Contact";

const getTextContent = ({ textContent }, currentLanguage) =>
  textContent.filter((textContent) => textContent.language === currentLanguage);

const mapStateToProps = (state) => ({
  currentLanguage: state.state.currentLanguage,
  content: getTextContent(state.content, state.state.currentLanguage),
});

export default connect(mapStateToProps)(Contact);
