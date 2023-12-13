import type {RootModel} from './models';
import {createModel} from '@rematch/core';

export const count = createModel<RootModel>()({
  state: 0,
  reducers: {
    inc(state, payload: number) {
      return state + payload;
    },
    dec(state, payload: number) {
      return state - payload;
    },
  },
});
