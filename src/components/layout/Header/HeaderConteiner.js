import { connect } from "react-redux";
import Header from "./Header";

import { changeLanguage } from "../../../redux/languageRedux";

// const mapStateToProps = (state) => ({
//   textContent: state.textContent,
// });

export const getTextContent = ({ content }, currentLanguage) =>
  content.filter((content) => content.language === currentLanguage);

const mapStateToProps = (state) => ({
  textContent: getTextContent(
    state.textContent,
    state.textContent.currentLanguage
  ),
});

const mapDispatchToProps = (dispatch) => ({
  changeLanguage: (language) => dispatch(changeLanguage(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
