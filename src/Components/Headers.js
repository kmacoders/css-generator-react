import React from 'react';
import './Style/Headers.css'

class Headers extends React.Component {
    render(){
        return(
            <div className="Headers">
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default Headers;