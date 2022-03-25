import { Routes, Route } from "react-router-dom";

import { LoginPage, DashBoardPage, PageNotFound } from "./pages";
import { AllProductsPanel, AddProductPanel, EditProductPanel, CategoriesPanel, OrdersPanel, DiscountsPanel, AnalyticsPanel, MembersPanel } from "components/panels/"

function App() {
 
  return (

      <>
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



      </>
  );
}

export default App;

 
