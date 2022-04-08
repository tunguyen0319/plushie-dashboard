import React from 'react';

import { IoColorWandOutline, IoTrashOutline } from 'react-icons/io5'

import { AdminButton } from 'ui/buttons';
import { ProductCardStyles, ProductImage, ProductName, ProductPrice, ProductDescription } from './styles'

function ProductCard ({children, product, ...props})  {
  const {productName, productPrice, productDescription, imageUrl} = {...product};
  
  return (
      <ProductCardStyles>

        <ProductImage className='product-img'>
          <img src={imageUrl} alt={productName} />
        </ProductImage>

        <section>
          <ProductName>{productName}</ProductName>
          
          <ProductPrice>${productPrice}</ProductPrice>
          
          <ProductDescription>{productDescription}</ProductDescription>
        </section>

        <aside>
          <AdminButton color="#FB7185" margin="0 0 0 auto"><IoColorWandOutline/></AdminButton>
          <AdminButton color="#FB7185" margin="0 0 0 .5rem"><IoTrashOutline/></AdminButton>
        </aside>
        

      </ProductCardStyles>
  )
}

export default ProductCard