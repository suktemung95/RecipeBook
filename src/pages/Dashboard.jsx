import { useState } from "react"
import DashboardNavBar from "../components/DashboardNavBar"
import DashboardComp from "../components/MainDashboardComp.jsx"
import { UserAuth } from "../context/AuthContext.jsx"

export default function Dashboard() {

    const [currentBoard, setCurrentBoard] = useState("Dashboard")
    const { session } = UserAuth()


    const navItems = [
        "Dashboard",
        "New Recipe",
        "My Recipes",
        "Favorites",
        "Shopping List",
        "Settings"
    ]

    return (
        // screen
        <div className="d-flex flex-column vh-100 vw-100 bg-primary">
            {/* Top bar */}
            <div className="bg-secondary mx-3 align-self-stretch" style={{ height: '10%' }}>
                <h1>Welcome to your recipes!</h1>
            </div>
            {/* Left navigation bar + main dashboard */}
            <div className="d-flex flex-row bg-secondary mx-3 my-2 h-100">
                <DashboardNavBar
                    navItems={navItems}
                    currentBoard={currentBoard}
                    setCurrentBoard={setCurrentBoard}
                />

                {/* Main dashboard area */}
                <DashboardComp navItems={navItems} currentBoard={currentBoard} />
            </div>
        </div>
    )
}