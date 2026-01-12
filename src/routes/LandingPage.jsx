import Navbar from '../components/NavBar';

export default function LandingPage() {
    return (
        <div className="landing-page d-flex flex-column align-items-center justify-content-center w-100"
            style={{ backgroundColor: '#f5f5f5', height: '50vh' }}>
            <Navbar />
            <div className='d-flex flex-column align-items-center w-100 px-3'>
                <h1 className="w-75 fw-bold">A place to save your best recipes</h1>
                <h2 className='mt-5 w-75 fw-light'>Save all of your favorite ideas so that you can make them again!
                    Share them with friends and family too!
                </h2>
            </div>
        </div>
    )
}