import { ACTION_TYPES } from '../constants/ActionTypes';

export const onLoad = todos => ({ type: ACTION_TYPES.load, todos });
export const onCreate = name => ({ type: ACTION_TYPES.create, name });
export const onDelete = id => ({ type: ACTION_TYPES.remove, id });
export const onUpdate = (id, values) => ({ type: ACTION_TYPES.update, id, values });
export const onCompleteAll = () => ({ type: ACTION_TYPES.completeAll });
export const onClearCompleted = () => ({ type: ACTION_TYPES.clearCompleted });
export const onFilterSelect = filter => ({ type: ACTION_TYPES.selectFilter, filter });
