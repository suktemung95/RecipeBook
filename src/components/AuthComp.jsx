import { Link } from "react-router-dom"

export default function AuthComp({ isLogin }) {
    return (
        <div className="d-flex flex-column p-3 gap-4 bg-secondary w-25 h-50">
            <input type="email" placeholder="Enter your email" />
            <input type="password" placeholder="Enter your password" />
            <button>Continue</button>
            <h5>
                {isLogin ? (
                    <>
                        Don't have an account? <span><Link to="/signup">Sign Up</Link></span>
                    </>
                ) : (
                    <>
                        Already have an account? <span><Link to="/login">Sign in</Link></span>
                    </>
                )}
            </h5>

        </div>
    )
}