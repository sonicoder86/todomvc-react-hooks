import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/index';
import { selectNotCompleted, selectCompleted, selectVisible } from './selectors/Todo';

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter,
  itemsLeft: selectNotCompleted(state.todos).length,
  completedCount: selectCompleted(state.todos).length,
  visibleTodos: selectVisible(state.todos, state.filter),
  areAllCompleted: state.todos.length && state.todos.every(todo => todo.completed)
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export const withStateAndDispatch = Component => connect(mapStateToProps, mapDispatchToProps)(Component);
