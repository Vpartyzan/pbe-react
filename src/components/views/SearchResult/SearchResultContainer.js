import { connect } from "react-redux";
import SearchResult from "./SearchResult";

import {
  getSearchString,
  createAction_changeSearchString,
} from "../../../redux/searchStringRedux";
import {
  changeRegion,
  changeExhibition,
  changeAmountImage,
} from "../../../redux/stateRedux";

const getSearchContent = ({ regions }, searchString) => {
  const arr = [];

  if (searchString === "") {
    return arr;
  } else {
    for (let region of regions) {
      for (let exh of region.exhibition) {
        for (let content of exh.content) {
          if (new RegExp(searchString, "i").test(content.title)) {
            arr.push({ ...exh, currentRegion: region.name });
          }
        }
      }
    }
  }

  return arr;
};

const mapStateToProps = (state) => ({
  searchString: state.searchString,
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
