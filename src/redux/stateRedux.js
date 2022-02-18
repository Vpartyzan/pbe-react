// action name creator
const reducerName = "state";
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types
export const CHANGE_LANGUAGE = createActionName("CHANGE_LANGUAGE");
export const CHANGE_REGION = createActionName("CHANGE_REGION");
export const CHANGE_EXHIBITION = createActionName("CHANGE_EXHIBITION");

// action creators
export const changeLanguage = (payload) => ({ payload, type: CHANGE_LANGUAGE });
export const changeRegion = (payload) => ({ payload, type: CHANGE_REGION });
export const changeExhibition = (payload) => ({
  payload,
  type: CHANGE_EXHIBITION,
});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...statePart,
        currentLanguage: action.payload,
      };
    case CHANGE_REGION:
      return {
        ...statePart,
        currentRegion: action.payload,
      };
    case CHANGE_EXHIBITION:
      return {
        ...statePart,
        activeExhibition: action.payload,
      };
    default:
      return statePart;
  }
}
