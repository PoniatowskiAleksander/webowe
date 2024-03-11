import './App.scss'
import {routes} from './Helpers/router'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import {
      BrowserRouter as Router, 
      Routes,
      Route 
} from 'react-router-dom'


function App() {

  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route 
            key={route.path} 
            path={route.path} 
            element={route.element} 
            />
        ))}
      </Routes>
      <Navbar />
      <Footer/>
    </Router>
  )
}

export default App
