import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Newsletter from "./components/newsletter/Newsletter";
import ProductList from "./pages/productList/ProductList";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import AllProductList from "./pages/productList/AllProductList";
import About from "./components/about/About";

function App() {
  return (
    <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products/:category" element={<ProductList />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/products" element={<AllProductList />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Newsletter />
                <Footer />
        </BrowserRouter>
  );
}

export default App;
