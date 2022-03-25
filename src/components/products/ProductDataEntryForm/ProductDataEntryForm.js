import React from 'react';

import {ProductDataEntryFormStyles, ProductImage, ProductName, ProductPrice, ProductDescription } from './styles'
import { AddNewLabel, Input, Textarea } from 'ui/forms';
import { ProductImageDropBox } from '../ProductImageDropBox';
import { SubmitButton } from 'ui/buttons';

function ProductDataEntryForm ({children, handleProductName, handleProductPrice, setProductImage, handleProductDescription, handleSubmit, ...props})  {
  return (
        <ProductDataEntryFormStyles  {...props} onSubmit={handleSubmit}  >
          <ProductImage>
            <AddNewLabel fs="1.125rem" color="#fda4af" >Product Image</AddNewLabel>
            <ProductImageDropBox setProductImage={setProductImage} />
          </ProductImage>

          <ProductName>
            <AddNewLabel>Product Name</AddNewLabel>
            <Input onChange={(e)=>handleProductName(e.target.value.trim())} maxLength={30} />
          </ProductName>

          <ProductPrice>
            <AddNewLabel>Product Price</AddNewLabel>
            <Input onChange={(e)=>handleProductPrice(e.target.value.trim())} maxLength={8}/>
          </ProductPrice>
          

          <ProductDescription>
            <AddNewLabel>Product Description</AddNewLabel>
            <Textarea onChange={(e)=>handleProductDescription(e.target.value.trim())} maxLength={200} />
          </ProductDescription>

          <SubmitButton width="fit-content" padding=".875rem 1.125rem" fs="1rem" texttransform="uppercase" type='submit' >Add Product</SubmitButton>

        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm