import {useState} from "react";
// import Product from "./pages/Product";
import Home from "./pages/Home";
// import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";


const App = () => {
  const [page, setPage] = useState("home");

  return (
    <CartProvider>
      <div>
        <Navbar onNavigate={setPage} />
        {page === "home" && <Home />}
        {page === "register" && <Register />}
        {page === "login" && <Login />}
        {page === "cart" && <Cart />}
      </div>
    </CartProvider>
  );
};

export default App;