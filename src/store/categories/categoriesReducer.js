import CATEGORIES_REDUCER_TYPES from "./categoriesTypes";

const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_REDUCER_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORIES_REDUCER_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
        isLoading: false,
      };
    case CATEGORIES_REDUCER_TYPES.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
