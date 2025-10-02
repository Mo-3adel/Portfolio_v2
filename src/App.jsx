import { Route, Routes , BrowserRouter} from 'react-router-dom'
import Home from './pages/Home.jsx'
import {Nav1} from './components/nav.jsx'
import About from './pages/About.jsx' 
import './App.css'
import Experiance from './pages/Experiance.jsx'
import Projects from './components/projects.jsx'
import ContactPage from './pages/Contact.jsx'   
import BlogPage from './pages/Blog.jsx'
function App() {
  

  return (
    <BrowserRouter>
    <Nav1 />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/Experiance' element={<Experiance/>} />
      <Route path='/Projects' element={<Projects/>} />
      <Route path='/Contact' element={<ContactPage/>} />
      <Route path='/Blog' element={<BlogPage/>} />
    </Routes>
    </BrowserRouter>

    
  )
}

export default App
