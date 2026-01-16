import { UserAuth } from "../context/AuthContext"
import { Navigate } from "react-router-dom"

const LoggedOutReroute = ({ children }) => {

    const { session } = UserAuth()
    console.log("PrivateRoute session: ", session)
    return (
        <> {session ? children : <Navigate to="/signup" />} </>
    )
}

export default LoggedOutReroute