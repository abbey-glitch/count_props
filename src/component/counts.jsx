import React, { Component } from 'react';
class Numbers extends Component {
    state = { nums:this.props.num.value } 
    handleIncrement = ()=>{
        this.setState({num:this.state.nums++})
    }
  
    render() { 
        console.log(this.props.num.id)
    
        return (<>
               <div className='bg-info mx-4'>
                   <span className={this.getStyle()}>{this.getNum()}</span>
                   <button className='bg-success' onClick={this.handleIncrement}>Increment</button>
                   <button className='bg-danger'>Decrement</button>
                   <button onClick={()=>this.props.onDelete(this.props.num.id)}>Delete</button>
               </div>
        </>);
    }
    getNum = ()=>{
        const {nums} = this.state
        return (nums == 0  ? "zero" : nums)
    }

    getStyle = () =>{
        let classes = "p-2 border border-warning mx-2 bg-"
        classes += this.state.nums == 0 ? "danger" : "warning" 
        return classes
    }
}
 
export default Numbers;