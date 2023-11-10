import React, { Component } from 'react';
class Numbers extends Component {
    state = { nums:0 } 
    handleIncrement = ()=>{
        this.setState({num:this.state.nums++})
    }
    render() { 
        console.log(this.props.num.value);
        return (<>
              
               <div className='bg-info mx-4'>
                   <span className='p-2 border border-warning mx-2 bg-light'>{this.state.nums}</span>
                   <button className='bg-success' onClick={this.handleIncrement}>Increment</button>
                   <button className='bg-danger'>Decrement</button>
               </div>
        </>);
    }
}
 
export default Numbers;