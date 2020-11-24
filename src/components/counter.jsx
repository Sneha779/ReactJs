import React, { Component } from 'react';

class Counter extends Component {
   state = {  
       count:0
   };

    render() { 
        React.createElement('div')
        return (
        <div>
        <span>{2+2}</span>
        <button>Increment</button>
        </div>);
        }
}
    
export default Counter;