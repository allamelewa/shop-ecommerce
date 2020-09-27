import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo.svg';
import ButtonContainer from '../buttonContainer/buttonContainer'
//import styled from 'styled-components'
import './navbar.css';
class Navbar  extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg " >
                <Link to='/'>
                    <img src={logo} alt='Store' className='navbar-brand' />
                </Link>

                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>
                            product
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className='ml-auto'>
                    <ButtonContainer>
                        <span className='mr-2'>
                        <i className='fas fa-cart-plus'/>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>

            </nav>
         );
    }
}

/*const ButtonContainer=styled.button `
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:0.05rem solid var(--lightBlue);

`
 */
export default Navbar;