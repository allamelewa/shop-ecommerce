import React, { Component } from 'react';
import './product.css';
import {Link} from 'react-router-dom';
//import PropTypes from 'prop-types'; 
//import ButtonContainer from '../buttonContainer/buttonContainer';
import { ProductConsumer } from '../productProvider/productProvider';
//import {ProductConsumer} from '../productProvider/productProvider';
//import Imgsrc from '../../img/product-1.png';

class Product extends Component {

    render() { 
        const {id,title,img,price,inCart}=this.props.product;
        return (
            <div className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
                <div className='card'>
                    <ProductConsumer>
                        {(value)=>(
                        <div className='img-container p-5'
                        onClick={()=> value.handleDetail(id)}
                        >
                        <Link to='/details'>
                            <img src={require('../../'+img)} alt='product' className="card-img-top"/>
                        </Link>
                        <button className='card-btn' disabled={inCart? true:false} 
                        onClick={()=>{
                        value.addToCart(id);
                        value.openModal(id);
                        }}>
                            {inCart? <p className='text-capitalize mb-0' disabled>in Cart</p>:<i className='fas fa-cart-plus'></i> }
                        </button>
                        
                    </div>)}
                    
                    

                    </ProductConsumer>
                    {/*card footer*/}
                    <div className=' card-footer  d-flex justify-content-between'>
                        <p className='align-self-center mb-0'>
                            {title}
                        </p> 
                        <h5 className='text-blue font-italic mb-0'>
                            <span className='mr-1'>$</span>
                            {price}
                        </h5>


                    </div>
                </div>
            </div>
          );
    }
}
/*Product.propTypes = {
    product:PropTypes.shap({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool,
    }).isRequired
};*/
 
export default Product;