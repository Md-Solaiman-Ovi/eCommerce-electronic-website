import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import TrendingProducts from "./components/TrendingProducts";
import { Toaster } from "react-hot-toast";
import Banner from "./components/Banner";
import NewArival from "./components/NewArrival";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { useState } from "react";
const App = () => {
  const [showCart, setShowCart]= useState<boolean>(false)
  return (
    <div>
      <Provider store={store}>
        <Navbar setShowCart={setShowCart} />
        { showCart && <Cart setShowCart={setShowCart}/>}
        <Hero />
        <Feature />
        <TrendingProducts />
        <Toaster position="top-center" reverseOrder={false} />
        <Banner/>
        <NewArival/>
        <Footer/>
      </Provider>
    </div>
  );
};

export default App;
