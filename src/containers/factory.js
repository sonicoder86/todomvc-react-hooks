import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export const withStateAndDispatch = Component => connect(mapStateToProps, mapDispatchToProps)(Component);
export const withDispatch = Component => connect(null, mapDispatchToProps)(Component);
