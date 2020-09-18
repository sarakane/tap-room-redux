import kegListReducer from '../../reducers/keg-list-reducer';
import * as a from './../../actions/index';

describe('kegListReducer', () => {
  let action;
  const kegData = {
    name: "Name",
    brand: "BRAND",
    price: 7.5,
    alcoholContent: 5.5,
    pints: 124,
    id: 1
  }
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });
  
  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, price, alcoholContent, pints, id } = kegData;
    action = a.addKeg(kegData);

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pints: pints,
        id: id
      }
    })
  })
});