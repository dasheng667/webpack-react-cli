import React from 'react';
import PropTypes from 'prop-types';

//redux
//统一管理数据

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 

        };
    }
  
    render() {
        console.log(this.props);
        let {add, del} = this.props
        return (
            <div>
                <input type="text" ref={inp => this.inp = inp}/>
                <button onClick={() => add(this.inp.value)}>添加</button>
                <br/>
                <ul>
                    {
                        this.props.test1.list.map((v, k)=>{
                            return (
                                <li key={k}>{v} <button onClick={()=>del(k)}>X</button></li>
                            )
                        })
                    }
                </ul>

            </div>
        );
    }
}

App.propTypes = {
    test1: PropTypes.object.isRequired
}

export default App;