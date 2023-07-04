import FeatureDetails from "./components/feature-details"
import Home from "./components/home"
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/features" element={<FeatureDetails/>}/>
      </Routes>
    
    </Router>
  )
}

export default App
