import React, { Component } from 'react';
import Product from '../product/product';
import './productList.css';
import Title from '../title/title';
//import {storeProducts} from '../../data'
import {ProductConsumer} from '../productProvider/productProvider'
class ProductList extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className='py-5'>
                    <div className='container'>
                        
                            <Title name='our' title='products'/>
                            <div className='row' >
                                <ProductConsumer>
                                    {(value)=>{
                                        return value.products.map(product=>{
                                            return <Product key={product.id} product={product}
                                            />
                                        })
                                        }}
                                </ProductConsumer>
                            </div>
                        

                    </div>
               
                </div>
            </React.Fragment>
            
         );
    }
} 
 
export default ProductList ;