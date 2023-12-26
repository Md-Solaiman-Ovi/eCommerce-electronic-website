import { Provider } from "react-redux"
import { store } from "./redux/store"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar/>
      </Provider>
    </div>
  )
}

export default App
