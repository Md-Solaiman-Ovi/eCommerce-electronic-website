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
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
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
