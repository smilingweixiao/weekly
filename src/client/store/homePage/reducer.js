const initHomePageState = {
    addModalShow: false,
    filterModalShow: false,
};

const homePageReducer = (state = initHomePageState, action) => {
  switch (action.type) {
    case 'HOME_ADD_TOGGLE':
      return {
        ...state,
        addModalShow: true,
      }
    case 'HOME_ADD_CLOSE':
      return {
        ...state,
        addModalShow: false,
      }
    case 'HOME_FILTER_TOGGLE':
      return {
        ...state,
        filterModalShow: true,
      }
    case 'HOME_FILTER_CLOSE':
      return {
        ...state,
        filterModalShow: false,
      }
    default:
      return state;
  }
};

export default homePageReducer;