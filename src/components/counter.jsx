import React, { Component } from 'react';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

class Counter extends Component {
  
  
   render() { 
    
        return (
            <div>
                <span  style={{fontSize: 30}} className={this.getBadgeclasses()}>{ this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)}  className="btn btn-secondary  btn-sm m-2">+</button>
                <button onClick={() => this.props.onDecrement(this.props.counter)}  className="btn btn-secondary  btn-sm m-2">-</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id) }   className="btn btn-danger  btn-sm">Delete</button>
              
                
            </div>
         
        );
    }
    formatCount()
    {
        const { value } = this.props.counter;
        return value === 0 ?"Zero":value;
    } 
    getBadgeclasses()
    {
        let classes='badge m-2 badge-';
        classes+= this.props.counter.value === 0 ?'warning':'primary';
        return classes;
    }
}
export default Counter;