import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/counter';

type stateType = {
  counter: Object,
};

function mapStateToProps(state: stateType) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch: () => {}) {
  return bindActionCreators(CounterActions as any, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter) as any// ComponentClass<RouteComponentProps<any> ;
