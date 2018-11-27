

import { connect } from 'react-redux';
import App from '../component/App';
import Action from '../action/type';

const doubleAsync = (dispatch, value)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            dispatch({
                type: Action.ADD,
                value: value || '异步添加的list'
            })
            resolve()
        }, 500);
    })
}

const mapStageToProps = (state)=>({
    test1: state.test1
})

const mapDispatchToProps = (dispatch)=>({
    add: (value) => dispatch({type: Action.ADD, value: value}),
    del: (key) => dispatch({type: Action.DEL, key: key}),
    doubleAsync: (value) => doubleAsync(dispatch, value)
})

const APPS = connect(mapStageToProps, mapDispatchToProps)(App)

export default APPS