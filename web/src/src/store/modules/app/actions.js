import types from './types';

export function save(task) {
  return { type: types.SAVE, task };
}

export function remove(taskId) {
  return { type: types.REMOVE, taskId };
}

export function toggle(taskId) {
  return { type: types.TOGGLE, taskId };
}

export function load() {
  return { type: types.LOAD };
}

export function set(tasks) {
  return { type: types.SET, tasks };
}

export function setLoading(loadingState) {
  return { type: types.SET_LOADING, loadingState };
}
