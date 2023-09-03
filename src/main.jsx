import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ProjectsProvider } from './providers/ProjectsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProjectsProvider>
      <App />
    </ProjectsProvider>
  </React.StrictMode>,
)
