import React, { Component } from 'react';
import Numbers from './counts';
class Number extends Component {
    state = { nums : [
        {id:1, value:3},
        {id:2, value:0},
        {id:3, value:5},
        {id:4, value:6}
    ]} 
    handleIncrement = () =>{
        console.log(this.state.nums + 1)
    }
    render() { 
        // console.log(this.state.nums)
        return (<>
                {
                    this.state.nums.map((num)=>
                    <Numbers 
                    key={num.id}>
                    </Numbers>)
                }
        </>);
    }
}
 
export default Number;