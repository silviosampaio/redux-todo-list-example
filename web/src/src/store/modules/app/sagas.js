import { all, takeLatest, put } from 'redux-saga/effects';
import types from './types';
import { setLoading, set } from './actions';

import api from '../../../services/api';

export function* loadTasks() {
  try {
    yield put(setLoading(true));
    const request = yield api.get('/todos');
    yield put(set(request.data));
  } catch (err) {
    alert(err.message);
  } finally {
    yield put(setLoading(false));
  }
}

export default all([takeLatest(types.LOAD, loadTasks)]);
