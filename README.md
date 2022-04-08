# Plushie React Dashboard - All Products Panel
Assessment 4 - React Dashboard Firebase Read Write
1. Display all products 
2. Product Editor View from Assessment 3

## useGetAllProducts.js
This file is used as a hook for all data coming from Firebase RTD.
1. Define useState()
1. Get all product data from Firebase RTD. 
1. Turn Object of Objects to Array of Objects
1. Set state and return data to AllProductsPanel.js

```javascript

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

```


## AllProductPanel.js
This file passing data from useGetAllProduct() and map data to ProductCard.js.
1. Import returning data 
1. Map productData into each Object from Array of Objects.
1. Pass product.uid as key and product to ProductCard

```javascript

    function AllProductsPanel({title, ...$prop}) {

        const productData = useGetAllProducts()

        return ( 
            <PanelStyles>
                <PanelHeader>
                    <h2>{ title || "Display Panel" }</h2>
                </PanelHeader>
                <PanelBody>
                    <section>
                        { productData? productData.map(product => <ProductCard key={product.uid} product={product} /> ) : null }
                    </section>
                </PanelBody>
            </PanelStyles>
        );
    }

```


## ProductCard.js
This file is used to received data from AllProductsPanel.js and displayed into card format. Data will be deconstructed from {...product} into productName, productPrice, productDescription, imageUrl and placed in appropriate elements.

```javascript

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

```