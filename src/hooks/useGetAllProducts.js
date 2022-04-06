import { useState, useEffect } from 'react'
import { ref as dataRef, get } from 'firebase/database'
import { db } from 'libs/firebase'

import { AllProduct } from 'components/products/widget/AllProduct'

function useGetAllProducts(card, id, name, price, des, url){

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

    // console.log(card)

}

export { useGetAllProducts }