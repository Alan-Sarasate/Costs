import { useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import GlobalStyles from './GlobalStyles'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import ProjectsCreation from './pages/ProjectsCreation/ProjectsCreation'
import Projects from './pages/Projects/Projects'
import EditPage from './pages/EditPage/EditPage'

function App() {

  const [projectEditId, useProjectEditId] = useState(null)
  
  return (
    <>
      <Router>
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projectscreation' element={<ProjectsCreation/>}/>
          <Route path='/projects' element={<Projects setEditProject={useProjectEditId}/>}/>
          <Route path='/editpage' element={<EditPage ProjectEdit={projectEditId}/>}/>
        </Routes>
          
        <Footer/>
      </Router>
      <GlobalStyles/>
    </>
  )
}

export default App
