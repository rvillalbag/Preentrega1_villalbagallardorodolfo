
import Navbar from "../Navbar/Navbar";
import { Baner } from "../Baner/Baner";
import Product from "../Products/Product";
const Home = () => {
    return(
        <>
        <Navbar/>
        <Baner/>
        <div className="product-car-container">
        <Product/>
        </div>
        </>
    );
}

export default Home;