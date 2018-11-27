
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './container/connectApp';
import store from './store';
import routers, { otherRoutes } from './routers/index';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <section className="router-wrapper">
                <ul>
                    {
                        routers.map((v, k) => {
                            if(v.hidden !== true){
                                return (
                                    <li key={k}><Link to={v.path}>{v.name}</Link></li>
                                )
                            }
                        })
                    }
                </ul>
                {
                    routers.map((v, k)=>{
                        if (v.children && v.children.length > 0) {
                            return(
                                <Route key={k} path={v.path} exact={v.exact}
                                    render={props => (
                                        <v.component {...props} routes={v.children} />
                                    )} />
                            )
                        }
                        else{
                            return(
                                <Route key={k} path={v.path} exact={v.exact} component={v.component} />
                            )
                        }
                    })
                }

                {
                    otherRoutes.map((v, k)=>{
                        return(
                            <Route key={k} path={v.path} exact={v.exact} component={v.component} />
                        )
                    })
                }
            </section>
        </Router>
    </Provider>, document.getElementById('root'));