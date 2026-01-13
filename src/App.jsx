import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './routes/LandingPage.jsx'
import SignupPage from './routes/SignupPage.jsx'
import LoginPage from './routes/LoginPage.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'

function App() {

  return (

    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </AuthContextProvider>
  )
}

export default App
