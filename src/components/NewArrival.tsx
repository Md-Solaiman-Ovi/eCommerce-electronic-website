import ProductCard from "./ProductCard"
import { newArrival} from "../redux/data"

const NewArival = () => {
  return (
    <div className="container mt-32 space-y-4">
        <div className="sm:flex justify-between items-center">
            <h2 className="text-4xl font-medium">New Arrival</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt">
            {
                newArrival.map((item)=>(
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

export default NewArival
