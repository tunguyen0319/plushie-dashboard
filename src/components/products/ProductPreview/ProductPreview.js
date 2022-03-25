import React from 'react';

import {ProductPreviewStyles, ProductImage, ProductName, ProductPrice, ProductDescription} from './styles'

function ProductPreview ({children, productName, productPrice, productImage, productDescription, ...props})  {

  return (
        <ProductPreviewStyles  {...props}>
           <ProductImage>
             <img src={productImage.previewImage} alt='8k nike flex' width='320' height='184'/>
           </ProductImage>

           <section>
             <ProductName>{productName}</ProductName>
             
             <ProductPrice>${productPrice}</ProductPrice>
             
             <ProductDescription>{productDescription}</ProductDescription>
           </section>
        </ProductPreviewStyles>
  )
}

export default ProductPreview