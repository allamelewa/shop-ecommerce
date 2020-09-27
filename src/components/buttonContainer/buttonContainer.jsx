import React, { Component } from 'react';
import './buttonContainer.css';
class ButtonContainer extends Component {
    state = {  }
    //////////////////
        buttonStyleBorder(props){
            let colorButt=props.cart? "#ffa400":"#009ffd";
           return {
                borderColor:colorButt,
                color:'#2a2a72',
                background:colorButt,
            }
        }
    /////////////////
    render() { 
        return ( 
            <button className='buttonContainer' onClick={this.props.onClick} style={this.buttonStyleBorder(this.props)} disabled={this.props.isCart===true}>
                 {this.props.children}
            </button>
         );
    }
}
 
export default ButtonContainer ;