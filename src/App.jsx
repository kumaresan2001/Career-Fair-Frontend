// import "./sb-admin-2.min.css";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./Components/TopBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import PortalLayout from "./Components/PortalLayout";
import Login from "./Components/Login";

import AddProduct from "./Components/AddProduct";
import CreateProduct from "./Components/CreateProduct";
import EditProduct from "./Components/EditProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortalLayout />}>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Products />} />
          {/* <Route path="/CartItems" element={<CartItems />} /> */}
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
