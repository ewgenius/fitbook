import { combineReducers } from 'redux';
import { ui, UiState } from './ui';

export interface State {
  ui: UiState;
}

export * from './ui';

export const reducer = combineReducers({
  ui
});