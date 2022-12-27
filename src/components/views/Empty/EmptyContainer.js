import { connect } from "react-redux";
import Empty from "./Empty";

export const getTextContent = ({ textContent }, currentLanguage) =>
  textContent.filter((textContent) => textContent.language === currentLanguage);

const mapStateToProps = (state) => ({
  content: getTextContent(state.content, state.state.currentLanguage),
});

export default connect(mapStateToProps)(Empty);
