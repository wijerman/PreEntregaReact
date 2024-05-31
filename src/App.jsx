import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Banner from "./components/Banner";
import Error404 from "./components/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/itemListContainer";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"/checkout"} element={<Checkout />} />
        <Route path={"/cart"} element={<Cart/>} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Banner />
      <Footer />
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;