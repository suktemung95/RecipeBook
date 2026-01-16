import { UserAuth } from "../context/AuthContext"
import { Navigate } from "react-router-dom"

const LoggedInReroute = ( { children }) => {

    const { session } = UserAuth()
    console.log("PrivateRoute session: ", session)
    return (
        <> {session ? <Navigate to='/dashboard' /> : children} </>
    )
}

export default LoggedInReroute