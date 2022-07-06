import { connect } from "react-redux";
import SearchResult from "./SearchResult";

import {
  getSearchString,
  getSearchContent,
  createAction_changeSearchString,
} from "../../../redux/searchStringRedux";
import {
  changeRegion,
  changeExhibition,
  changeAmountImage,
} from "../../../redux/stateRedux";

const mapStateToProps = (state) => ({
  searchString: getSearchString(state),
  searchResult: getSearchContent(state.content, state.searchString),
  currentLanguage: state.state.currentLanguage,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: (newSearchString) =>
    dispatch(createAction_changeSearchString(newSearchString)),
  changeExhibition: (ExhibitionId) => dispatch(changeExhibition(ExhibitionId)),
  changeAmountImage: (amountImage) => dispatch(changeAmountImage(amountImage)),
  changeRegion: (curentRegion) => dispatch(changeRegion(curentRegion)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
