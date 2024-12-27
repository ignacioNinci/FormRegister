import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RegisterApp from './RegisterApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RegisterApp />
  </StrictMode>,
)
