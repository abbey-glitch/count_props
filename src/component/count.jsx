import React, { Component } from 'react';
import Numbers from './counts';
class Number extends Component {
    state = { nums : [
        {id:1, value:3},
        {id:2, value:0},
        {id:3, value:5},
        {id:4, value:8}
    ]} 
    // handleIncrement = () =>{
    //     console.log(this.state.nums)
    // }
    render() { 
        // console.log(this.state.nums)
        return (<>
                <div className="container">
                    <h3>NavBar</h3>
                {
                    this.state.nums.map((num)=>
                    <Numbers 
                    key={num.id}
                    num={num}>
                        {/* passing of props to a component */}
                      <p>this is the child props</p>
                      <h3>welcome</h3>
                      <button>Delete</button>
                    </Numbers>)
                }
                </div>
               
        </>);
    }
}
 
export default Number;