import React, { Component } from 'react';
import './title.css';
class Title  extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='row'>
                <div className='col-10 mx-auto my-2 text-center text-title'>
                    <h1 className='text-capitalize font-weight-bold'>
                        {this.props.name}
                        <strong className='text-blue'>
                            {this.props.title}
                        </strong>

                    </h1>

                </div>

            </div>
         );
    }
}
 
export default Title  ;