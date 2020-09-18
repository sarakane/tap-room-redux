export const addKeg = (keg) => {
  const { name, brand, price, alcoholContent, pints, id } = keg;
  return {
    type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints,
      id: id
  }
};

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});