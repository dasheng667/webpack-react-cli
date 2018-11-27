import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


class Topics extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            
        };
    }
  
    render() {
        var match  = this.props.match
        var routes = this.props.routes
        return (
            <div>
                 <ul>
                    {
                        routes.map((v, k)=>{
                            return(
                                <li key={k}><Link to={`${match.url}${v.path}`}>{v.name}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Topics;