import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from '../components/home'

const RouterConfigComponent = () => {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/features" element={<FeatureDetails/>}/>
      </Routes>
    
    </Router>
  )
}

export default RouterConfigComponent