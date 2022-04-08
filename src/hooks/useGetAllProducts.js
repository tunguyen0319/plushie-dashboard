import { useState, useEffect } from 'react'
import { ref as dataRef, get } from 'firebase/database'
import { db } from 'libs/firebase'

function useGetAllProducts(path){

    const [productData, setProductData] = useState(null)

    useEffect(()=>{

        async function getProducts(){
            const productRef = dataRef(db, 'products/');
            const productSnapShot = await get(productRef)
            const data = await productSnapShot.val();
            setProductData(Object.values(data))
        }
        getProducts()

    },[])

    return productData

}

export { useGetAllProducts }