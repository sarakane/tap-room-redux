import { sampleData } from '../api/sampleData';
import * as c from './../actions/ActionTypes';

export default (state = sampleData, action) => {
  const { name, brand, price, alcoholContent, pints, id } = action;
  switch (action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          alcoholContent: alcoholContent,
          pints: pints,
          id: id,
        },
      });
    default:
      return state;
  }
};
