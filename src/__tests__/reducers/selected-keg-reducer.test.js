import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe("selectedKegReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(selectedKegReducer(null, { type: null })).toEqual(null);
  });
});