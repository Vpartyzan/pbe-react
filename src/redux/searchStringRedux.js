// selectors
export const getSearchString = ({ searchString }) => searchString;
export const getSearchContent = ({ regions }, searchString) => {
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

// action name creator
const reducerName = "searchString";
const createActionName = (name) => `app/${reducerName}/${name}`;

// actions types
export const CHANGE = createActionName("CHANGE");

// action creators
export const createAction_changeSearchString = (payload) => ({
  payload,
  type: CHANGE,
});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE:
      return action.payload;
    default:
      return statePart;
  }
}
