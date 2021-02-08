import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {

    constructor(){
        super();
        this.state = {
            counter : 0
        }
       
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment(by){
        this.setState({
            counter : this.state.counter + by
        });
    }

    decrement(by){
        this.setState({
            counter : this.state.counter - by
        });
    }

    reset(){
        this.setState({
            counter : 0
        });
    }

    render() {
      return (
        <div className="Counter">
          <CounterButton by={1} incrementMethod = {this.increment} decrementMethod = {this.decrement}/> 
          <CounterButton by={5} incrementMethod = {this.increment} decrementMethod = {this.decrement}/> 
          <CounterButton by={10} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
          <span className="count" >{this.state.counter}</span>    
          <div><button className="reset" onClick={this.reset}>Reset</button></div>     
        </div>
      );
    }
  }

class CounterButton extends Component {   

    constructor(){
        super();
    //    this.state = {
    //        counter : 0
    //    }
        //if we use arrow function this bind is not necessary
     //   this.decrement = this.decrement.bind(this);
    }
    // if we want to call super class method with argument - use arrow function
    render (){
        return (
            <div className="Counter">               
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>                
            </div>
        );
    }

 /*  we remove all these and directly call the super class method from child class  
 decrement(){
        this.setState({
            counter : this.state.counter - this.props.by
        },
        this.props.decrementMethod(this.props.by)
        );
    }

    increment = () => {
        this.setState({
            counter : this.state.counter + this.props.by
        },
        this.props.incrementMethod(this.props.by)
        );
    }  */
}

export default Counter;