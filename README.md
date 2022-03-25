# Plushie React Dashboard - Add New Product Panel

This project contains Protected Routes, Nested Routes & Add New Product Panel.

## Add Protected Routes with Nested Routes
Protected Routes are added to require: 

1. User login before accessing dashboard.
1. Direct user from 404 to login page if user is not login
1. Direct user from 404 to dashboard page if user is login

Nested Routes are add to dashboard panel links with the landing page display All Products.


```javascript
    <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="dashboard" element={<DashBoardPage/>}>
            <Route index element={<AllProductsPanel title="All Products"/>}/>
            <Route path="add" element={<AddProductPanel title="Add New Product"/>}/>
            <Route path="edit" element={<EditProductPanel title="Edit Product"/>}/>
            <Route path="categories" element={<CategoriesPanel title="Categories"/>}/>
            <Route path="orders" element={<OrdersPanel title="Orders"/>}/>
            <Route path="discounts" element={<DiscountsPanel title="Discounts"/>}/>
            <Route path="members" element={<MembersPanel title="Members"/>}/>
            <Route path="analytics" element={<AnalyticsPanel title="Analytics"/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
```

## Add New Product Panel

1. Create Product Editor wrapped all content including Data Entry Form and Product Preview.

1. Add form fields to gather product name, price, description and image.

1. Show Editor Feedback showed product is loading and completed state.

1. Product info and image are uploaded to firebase.

## Create Widgets support passing input data and adding to Product Preview

```javascript
const defaults = {
  description: "A slice of heaven. O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, at the black singlet woolshed party, not even au, sort your drinking out.",
  name: "Product Name",
  price: "0.00"
}

function AddProduct ({children, ...props})  {
  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState(defaults.name)
  const [productPrice, setProductPrice] = useState(defaults.price)
  const [productImage, setProductImage] = useState({previewImage:ProductPreview, file:null})
  const [productDescription, setProductDescription] = useState(defaults.description)
  const [loading, productLoader] = useAddNewProduct()
  
  const formatter = useNumberFormat()

  function handleProductName(name){
    setProductName(name)
  }

  function handleProductPrice(price){
    setProductPrice(formatter(price))
  }

  function handleProductDescription(description){
    setProductDescription(description)
  }

  function handleSubmit(e){
    e.preventDefault()

    const productData = {
      productName,
      productPrice,
      productDescription
    }

    setIsWriting(true)
    productLoader(productData, productImage.file)
    setProductDescription(defaults.description)
    setProductImage({previewImage:ProductPreview, file:null})
    setProductName(defaults.name)
    setProductPrice(defaults.price)

  }

  if(isWriting){
    return(
      <EditorFeedback status={loading} writeCompleted={setIsWriting} />
    )
  }
  else{
    return (
      <AddProductStyles  {...props}>
        <ProductEditor 
        productName={productName} handleProductName={handleProductName}
        productPrice={productPrice} handleProductPrice={handleProductPrice}
        productImage={productImage} setProductImage={setProductImage}
        productDescription={productDescription} handleProductDescription={handleProductDescription}
        handleSubmit={handleSubmit}
        />
      </AddProductStyles>
    )
  }
}

```