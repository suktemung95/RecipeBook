import AuthComp from '../components/AuthComp.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserAuth } from '../context/AuthContext.jsx';

export default function SignupPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');

    const { session, signupNewUser } = UserAuth();
    const navigate = useNavigate();
    console.log(session);
    console.log(email, password);

    const handleSignUp = async (e) => {
        e.preventDefault()
        setLoading(true);

        try {
            const result = await signupNewUser(email, password)

            if (result.success) {
                navigate('/dashboard')
            }
        } catch (error) {
            setError("An error occurred");
            setLoading(false)
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center"
            style={{ height: '90vh', width: '90vw' }}>
            <AuthComp isLogin={false} setEmail={setEmail} setPassword={setPassword} error={error} />
        </div >
    )
}