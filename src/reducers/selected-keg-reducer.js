import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const {name, brand, price, alcoholContent, pints, id} = action;
  switch (action.type) {
    case c.SELECT_KEG:
      return  {
        name: name,
          brand: brand,
          price: price,
          alcoholContent: alcoholContent,
          pints: pints,
          id: id
      }
    case c.CLEAR_SELECTED_KEG:
      return null;
    default:
      return state;
  }
};
