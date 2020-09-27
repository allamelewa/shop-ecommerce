import React, { Component } from 'react';
import {ProductConsumer} from '../productProvider/productProvider';
import ButtonContainer from '../buttonContainer/buttonContainer';
import {Link} from 'react-router-dom';
import './modal.css';

class Modal extends Component {
    state = {  }
    render() { 
        return ( 
            <ProductConsumer>
                {(value)=>{
                    const {modalOpen,closeModal}=value;
                    const{img,title,price}=value.modalProduct;


                    if(!modalOpen){
                        return null;
                    }
                    else{
                        return(
                            <div className='modalContainer'>
                                <div className="container">
                                    <div className='row'>
                                        <div id='modal' className="col-8 mx-auto col-6 col-lg-4 text-center text-capitalize">
                                            <h5>item added to the cart</h5>
                                            <img src={require('../../'+img)} className='img-fluid' alt='product'/>
                                            <h5>{title}</h5>
                                            <h5 className='text-muted'>price : $ {price}</h5>
                                            <Link to='/'>
                                                <ButtonContainer onClick={()=>closeModal()}>
                                                    continue shopping
                                                </ButtonContainer>
                                                </Link>
                                            <Link to='/cart'>
                                                <ButtonContainer cart onClick={()=>closeModal()}>
                                                   go to cart
                                                </ButtonContainer>
                                            
                                            </Link> 
                                        </div>
                                    </div>
                                    
                                </div>
                            
                             </div>
                        )
                    }
                }}
            </ProductConsumer>
         );
    }
}
 
export default Modal;