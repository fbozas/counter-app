import React, { Component } from 'react';

class Counter extends Component {
    state = {  
        count: 100
    } 
    render() { 
        return (
           <div>
                <span>{2+2}</span>
                <button>Increment</button>
           </div>
        );
    }
}
 
export default Counter;