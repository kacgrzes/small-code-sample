import expect from 'expect';
import { setName } from '../actions/setName';
import reducer, { getInitState } from './name';

const initialState = getInitState();

describe('Name reducer', () => {
  beforeEach();

  describe('state reducers', () => {
    it('sets name', () => {
        const state = initialState;
        const action = setName('Kacper');
        const newState = reducer(state, action);

        expect(newState).toNotBe(state);
        expect(newState).toEqual('Kacper');
      });
  });
});
