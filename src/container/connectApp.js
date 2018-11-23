

import { connect } from 'react-redux';
import App from '../component/App';
import Action from '../action/type';

const mapStageToProps = (state)=>({
    test1: state.test1
})

const mapDispatchToProps = (dispatch)=>({
    add: (value) => dispatch({type: Action.ADD, value: value}),
    del: (key) => dispatch({type: Action.DEL, key: key})
})

const APPS = connect(mapStageToProps, mapDispatchToProps)(App)

export default APPS