import * as actions from './../../actions';

describe('keg list actions', () => {
  test('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg(1)).toEqual({
      type: 'ADD_KEG',
      id: 1
    });
  });
});