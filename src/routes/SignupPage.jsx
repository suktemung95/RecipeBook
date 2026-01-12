import AuthComp from '../components/AuthComp.jsx';

export default function SignupPage() {
    return (
        <div className="d-flex justify-content-center align-items-center"
            style={{ height: '90vh', width: '90vw' }}>
            <AuthComp isLogin={false} />
        </div >
    )
}