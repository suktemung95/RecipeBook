import { Link } from "react-router-dom";

export default function AuthComp({ isLogin, setEmail, setPassword, error, handleSignUp, loading }) {
    console.log("Opened AuthComp")
    return (
        <form
            className="d-flex flex-column p-3 gap-4 bg-secondary w-25 h-50 rounded"
            onSubmit={handleSignUp}
        >
            <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                required
            />
            <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                required
            />
            <button type="submit" disabled={loading}>Continue</button>

            {error && <p className="text-danger text-center pt-4">{error}</p>}

            <h5 className="text-center">
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
        </form >
    );
}
