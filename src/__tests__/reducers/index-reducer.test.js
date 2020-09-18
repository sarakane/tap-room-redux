import rootReducer from '../../reducers/index';
import { createStore} from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';
import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as a from '../../actions/index';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      formVisibleOnPage: false,
      selectedKeg: null
    });
  });

  test('Check that initial state of kegListReducer matches root reducer', () => {
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that initial state of selectedKegReducer matches root reducer', () => {
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, { type: null }));
  })

  test('Check that initial state of kegListReducer matches root reducer', () => {
    const keg = {
      name: 'Name',
      brand: 'BRAND',
      price: 7.5,
      alcoholContent: 5.5,
      pints: 124,
      id: 1
    };
    const action = a.addKeg(keg);
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = a.toggleForm();
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

  test('Check that initial state of selectedKegReducer matches root reducer', () => {
    const keg = {
      name: 'Name',
      brand: 'BRAND',
      price: 7.5,
      alcoholContent: 5.5,
      pints: 124,
      id: 1
    };

    const action = a.selectedKeg(keg);
    store.dispatch(action);
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, action));
  });

});