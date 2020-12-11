export const initialState = {
  user: null,
  basket: [],
};
export const checkPrice = (basket) => {
  return basket.reduce((acc, val) => acc + val, 0);
};
function reducer(state, action) {
  //state is basically an over written initialStae passed via a component
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //copy the current basket
      let newbasket = state.basket;
      // finding index of the item to be removed
      let index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // item exist
        newbasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove product(id : ${action.id}) as its not in the basket `
        );
      }
      return {
        ...state,
        backet: newbasket,
      };
    case "SET_USER":
      const updatedUser = action.user;
      return {
        ...state,
        user: updatedUser,
      };
    default:
      return state;
  }
}

export default reducer;
