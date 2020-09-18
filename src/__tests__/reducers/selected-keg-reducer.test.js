import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as a from '../../actions/index';

describe("selectedKegReducer", () => {
  const kegData = {
    name: "Name",
    brand: "BRAND",
    price: 7.5,
    alcoholContent: 5.5,
    pints: 124,
    id: 1
  }

  test('Should return default state if no action type is recognized', () => {
    expect(selectedKegReducer(null, { type: null })).toEqual(null);
  });

  test('Should successfully add selected keg data to selectedKeg', () => {
    const action = a.selectedKeg(kegData);

    expect(selectedKegReducer(null, action)).toEqual({
      name: "Name",
      brand: "BRAND",
      price: 7.5,
      alcoholContent: 5.5,
      pints: 124,
      id: 1
    });
  });

  test('Should successfully set selectedKeg to null when action type is CLEAR_SELECTED_KEG', () => {
    const action = a.clearSelectedKeg();

    expect(selectedKegReducer({
      name: "Name",
      brand: "BRAND",
      price: 7.5,
      alcoholContent: 5.5,
      pints: 124,
      id: 1
    }, action)).toEqual(null);
  });
});