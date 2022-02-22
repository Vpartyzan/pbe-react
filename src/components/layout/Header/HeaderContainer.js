import { connect } from "react-redux";
import Header from "./Header";

import { changeLanguage } from "../../../redux/stateRedux";

export const getTextContent = ({ textContent }, currentLanguage) =>
  textContent.filter((textContent) => textContent.language === currentLanguage);

const mapStateToProps = (state) => ({
  content: getTextContent(state.content, state.state.currentLanguage),
});

const mapDispatchToProps = (dispatch) => ({
  changeLanguage: (language) => dispatch(changeLanguage(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
