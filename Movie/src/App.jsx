import './App.css'
import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
import { NotFound } from './Pages/NotFound';
import { Home } from './Pages/Home';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/notfound" element={<NotFound/>}/>          
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>


    </>
  )
}

export default App
