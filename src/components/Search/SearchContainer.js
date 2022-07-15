import { connect } from "react-redux";
import Search from "./Search";

import {
  getSearchString,
  createAction_changeSearchString,
} from "../../redux/searchStringRedux";

const mapStateToProps = (state) => ({
  searchString: getSearchString(state),
  currentLanguage: state.state.currentLanguage,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: (newSearchString) =>
    dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
