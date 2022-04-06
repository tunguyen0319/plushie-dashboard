import React from 'react';

import { IconButton } from 'ui/buttons';
import { ProductCardStyles, ProductImage, ProductName, ProductPrice, ProductDes } from './styles'

function ProductCard ({children, id, name, price, des, url, ...props})  {
  // console.log(name)

  return (
      <ProductCardStyles>
        <ProductImage className='product-img'>
          <img src={url} alt={name} />
        </ProductImage>

        <section>
          <ProductName>{name}</ProductName>
          
          <ProductPrice>{price}</ProductPrice>
          
          <ProductDes>{des}</ProductDes>
        </section>
        
        <div>
          <IconButton>Edit</IconButton>
          <IconButton>Delete</IconButton>
        </div>
      </ProductCardStyles>
  )
}

export default ProductCard