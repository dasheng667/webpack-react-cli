
import { combineReducers } from 'redux';
import actionType from '../action/type'

//combineReducers 解决不同组件的数据操作问题


const initState = {
    name: '这是name',
    list: [
        '测试数据1',
        '测试数据2'
    ]
}

const test1 = (state = initState, action)=>{
    switch (action.type) {
        case actionType.ADD:
            state.list = [...state.list, action.value]
            return Object.assign({}, state)
        case actionType.DEL:
            state.list.splice(action.key, 1)
            return Object.assign({}, state)
        default:
            return state;
    }
}

export default combineReducers({ test1 })