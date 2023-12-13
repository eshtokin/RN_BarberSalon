import {init, RematchDispatch, RematchRootState} from '@rematch/core';
import {models, RootModel} from './models';
import {useSelector} from 'react-redux';

export const store = init({models});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;

function useAppSelector(callback: (state: RootState) => any) {
  return useSelector<RootState, any>(callback);
}
