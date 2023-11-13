import React, { Component } from 'react';
import Numbers from './counts';
class Number extends Component {
    state = { nums : [
        {id:1, value:3},
        {id:2, value:0},
        {id:3, value:5},
        {id:4, value:8}
    ]} 
   handleDelete=(event_id)=>{
    const nums = this.state.nums.filter(single => single.id != event_id)
    this.setState({nums})
   }
    render() { 
        // console.log(this.state.nums)
        return (<>
                <div className="container">
                    <h3>NavBar</h3>
                {
                    this.state.nums.map((num)=>
                    <Numbers 
                    key={num.id}
                    num={num}
                    onDelete={this.handleDelete}>
                        {/* passing of props to a component */}
                      <p>this is the child props</p>
                      <h3>welcome</h3>
                    </Numbers>)
                }
                </div>
               
        </>);
    }
}
 
export default Number;