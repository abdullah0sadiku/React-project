import "./App.css";
import Main from "./Components/Pages/Main";
import Register from "./Components/Pages/Register"
import Ecommerc from "./Components/Pages/e-commerc"
import Cart from "./Components/Pages/Cart"
import Dashboard from "./Components/Pages/Dashboard.js";
import { BrowserRouter , Routes , Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        
       <BrowserRouter>
          <Routes>
              <Route  index element={<Main/>}/>
              <Route path="/Register" element={<Register/>}/>
              <Route path="/Store" element={<Ecommerc/>}/>
              <Route path="/Cart" element={<Cart/>}/>
              <Route path="/Dashboard" element={<Dashboard/>}/>
          </Routes>
       </BrowserRouter>
      





    </div>
  );
}

export default App;
