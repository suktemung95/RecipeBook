import AuthComp from '../components/AuthComp.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserAuth } from '../context/AuthContext.jsx';

export default function SignupPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { session, signInUser } = UserAuth();
    const navigate = useNavigate();
    console.log(session);
    console.log(email, password);

    const handleSignIn = async (e) => {
        console.log("Handling sign in");
        e.preventDefault()
        setLoading(true);

        try {
            const result = await signInUser({ email, password })

            if (result.success) {
                console.log("Sign in successful")
                setLoading(false);
                navigate('/dashboard')
            }
        } catch (error) {
            setError("An error occurred: " + error.message);
            setLoading(false)
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center"
            style={{ height: '90vh', width: '90vw' }}>
            <AuthComp
                isLogin={true}
                setEmail={setEmail}
                setPassword={setPassword}
                error={error}
                handleSignUp={handleSignIn}
                isLoading={loading}
            />
        </div >
    )
}