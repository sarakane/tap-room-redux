import * as c from './../actions/ActionTypes';

export const addKeg = (keg) => {
  const { name, brand, price, alcoholContent, pints, id } = keg;
  return {
    type: c.ADD_KEG,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints,
      id: id
  }
};

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const selectedKeg = (keg) => {
    const { name, brand, price, alcoholContent, pints, id } = keg;
    return {
      type: c.SELECT_KEG,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints,
      id: id
    }
}

export const clearSelectedKeg = () => ({
  type: c.CLEAR_SELECTED_KEG
});