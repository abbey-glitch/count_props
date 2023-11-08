import React, { Component } from 'react';
class Numbers extends Component {
    state = { nums:this.props.nums  } 
    render() { 
        // console.log(this.props);
        return (<>
              
               <div className='bg-info'>
                <h3 className='text-light'>Navbar</h3>
                   <span>4</span>
                   <button className='bg-success' onClick={this.handleIncrement}>Increment</button>
                   <button className='bg-danger'>Decrement</button>
               </div>
        </>);
    }
}
 
export default Numbers;