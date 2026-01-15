import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './routes/LandingPage.jsx'
import SignupPage from './routes/SignupPage.jsx'
import LoginPage from './routes/LoginPage.jsx'
import Dashboard from './routes/Dashboard.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import PrivateRoute from './reroute/PrivateRoute.jsx'

function App() {

  return (

    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </AuthContextProvider>
  )
}

export default App
