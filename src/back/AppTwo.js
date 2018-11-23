import React from 'react';
import PropTypes from 'prop-types';
import Action from '../action/type';

//redux
//统一管理数据

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { };
    }

    removeItem = (key) => {
        this.props.dispatch({ type: Action.DEL, key: key })
    }

    handleClick = (e) => {
        var value = this.refs.input.value;
        this.props.dispatch({type: Action.ADD, value: value})
    }

    render() {
        return (
            <div>
                <input type="text" ref="input"/>
                <button onClick={this.handleClick}>添加</button>
                <br/>
                <ul>
                    {
                        this.props.store.list.map((v, k)=>{
                            return (
                                <li key={k}>{v} <button onClick={this.removeItem.bind(this, k)}>X</button></li>
                            )
                        })
                    }
                </ul>

            </div>
        );
    }
}

App.propTypes = {
    store: PropTypes.object.isRequired
}

export default App;