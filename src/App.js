import { Routes, Route } from "react-router-dom";

import { LoginPage, DashBoardPage, PageNotFound } from "./pages";
import { DashBoardPanel, AllProductsPanel, AddProductPanel } from "components/panels/"

function App() {
 
  return (

      <>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="dashboard" element={<DashBoardPage/>}>
            <Route index element={<DashBoardPanel title="Welcome Back!"/>}/>
            <Route path="all" element={<AllProductsPanel title="All Products"/>}/>
            <Route path="add" element={<AddProductPanel title="Add New Product"/>}/>
          </Route>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>



      </>
  );
}

export default App;

 
