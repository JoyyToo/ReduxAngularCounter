import { INCREMENT, DECREMENT } from './counter.actions';
import { AppState } from './app.state';
import { Action, Reducer } from 'redux';

// set initial state
const initialState: AppState = { counter: 0};

// create reducer to handle changes to the state
// use object.assign to ensure we don't mutate the old state
export const counterReducer: Reducer<AppState> =
    (state: AppState = initialState, action: Action): AppState => {
      switch (action.type) {
        case INCREMENT:
          return Object.assign({}, state, { counter: state.counter + 1 });
        case DECREMENT:
          return Object.assign({}, state, { counter: state.counter - 1 });
        default:
          return state;
      }
        
    }
