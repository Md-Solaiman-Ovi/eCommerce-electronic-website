import ProductCard from "./ProductCard"
import { Products } from "../redux/data"

const TrendingProducts = () => {
  return (
    <div className="container mt-32 space-y-4">
        <div className="sm:flex justify-between items-center ">
            <h2 className="text-4xl font-medium">Trending Products</h2>
            <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
                <div className="text-black ">New</div>
                <div>Featured</div>
                <div>Top Seller </div>
            </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt">
            {
                Products.map((item)=>(
                    <ProductCard key={item.id}
                    id={item.id}
                    img={item.img}
                    category={item.category}
                    title={item.title}
                    price={item.price}
                    />
                ))
            }
            
        </div>
      
    </div>
  )
}

export default TrendingProducts
