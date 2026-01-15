import { UserAuth } from "../context/AuthContext"
import { Navigate } from "react-router-dom"

const LoggedInReroute = () => {

    const { session } = UserAuth()
    console.log("PrivateRoute session: ", session)
    return (
        <> {session ? <Navigate to='/dashboard' /> : <Navigate to="/signup" />} </>
    )
}

export default LoggedInReroute