import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import './styles/print.css'
import App from './App.tsx'
import UserTesting from './pages/user-testing/UserTesting.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/user-testing" element={<UserTesting />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
