
const AppReducer = (state: any, action: any) => {

  switch (action.type) {

    case "GET_TRENDS_DATA":
      return {
        ...state,
        trendData: action.payload,
      };

    case "TRENDS_DATA":
      break;

    case "GET_DATA":
      break;

    default:
      return state;
  }
};

export default AppReducer;
