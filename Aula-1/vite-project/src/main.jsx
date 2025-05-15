import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyFirstComponent from './MyFirstComponent.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyFirstComponent></MyFirstComponent>
  </StrictMode>,
)
