import { InjectionToken } from '@angular/core';
import {
  createStore,
  Store,
  compose,
  StoreEnhancer
} from 'redux';

import { AppState } from './app.state';
import { counterReducer as reducer } from './counter.reducer';

// token we will use for injecting the store
export const AppStore = new InjectionToken('App.store');

// inorder to use chrome redux extension
const devtools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
  window['devToolsExtension']() : f => f;

// inorder to use devtools we pass it as a middleware to the redux store
export function createAppStore(): Store<AppState> {
  return createStore(
    reducer,
    compose(devtools)
  );
}

export const appStoreProviders = [
   { provide: AppStore, useFactory: createAppStore }
];
