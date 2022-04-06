import React from 'react';

import {ProductCardStyles} from './styles'

function ProductCard ({children, id, name, price, des, url, ...props})  {
  // console.log(name)

  return (
        <div>
          <h3>{name}</h3>
          <p>{price}</p>
          <p>{des}</p>
          <img src={url} alt={name} />
        </div>
  )
}

export default ProductCard