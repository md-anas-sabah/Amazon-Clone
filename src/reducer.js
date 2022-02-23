export const initialState = {
  basket: [],
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // LOGIC FOR ADDING ITEM IN BASKET

      break;

    case "REMOVE_FROM_BASKET":
      //LOGIC FOR REMOVING ITEM IN BASKET
      break;
    default:
      return state;
  }
}

export default reducer;
