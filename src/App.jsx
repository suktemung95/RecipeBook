import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import LoggedOutReroute from './reroute/LoggedOutReroute.jsx'
import LoggedInReroute from './reroute/LoggedInReroute.jsx'

function App() {

  return (

    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<LoggedInReroute><SignupPage /></LoggedInReroute>} />
        <Route path="/login" element={<LoggedInReroute><LoginPage /></LoggedInReroute>} />
        <Route path="/dashboard" element={
          <LoggedOutReroute>
            <Dashboard />
          </LoggedOutReroute>
        } />
      </Routes>
    </AuthContextProvider>
  )
}

export default App
