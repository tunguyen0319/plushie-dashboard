import React from 'react';
import { useState, useEffect } from 'react'
import { ref as dataRef, get } from 'firebase/database'
import { db } from 'libs/firebase'

import {AllProductStyles, ProductCards} from './styles'
import { ProductCard } from 'components/products/ProductCard';
// import { useGetAllProducts } from 'hooks/useGetAllProducts';

function AllProduct ({children, card, id, name, price, des, url, ...props})  {

  // useGetAllProducts(card, id, name, price, des, url)

  const [productData, setProductData] = useState([])

  useEffect(()=>{

      async function loadData(){
          const productRef = dataRef(db, 'products/');
          const res = await get(productRef)
          const data = res.val();
          setProductData(data)
      }
      loadData()

  },[])

  card = Object.values(productData).map(product => {
    
    id = product.uid
    name = product.productName
    price = product.productPrice
    des = product.productDescription
    url = product.imageUrl
    
    return {id, name, price, des, url}
  })

  return (
        <AllProductStyles {...props}>

          {
            card.map(({id, name, price, des, url}) => <ProductCard key={id} name={name} price={price} des={des} url={url} />  )            
          }

        
        </AllProductStyles>
  )
}

export default AllProduct