import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactPackage } from './ReactPackage.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactPackage />
  </StrictMode>,
)
