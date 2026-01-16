import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
export default function Navbar() {
    return (
        <nav className="d-flex flex-grow-1 align-items-center justify-space-around fixed-top"
            style={{
                height: '60px', backgroundColor: '#e3f2fd', paddingLeft: '150px',
                paddingRight: '100px', width: '100%'
            }}>
            <Link to="/">Recipe Book</Link>

            <div className="d-flex flex-grow-1 align-items-center gap-4"
                style={{ paddingLeft: '200px' }}>
                <DropdownButton title="About">
                    <Dropdown.Item href="#/action-1">What you found me</Dropdown.Item>
                </DropdownButton>
            </div>
            <div className='d-flex gap-4'>
                <Link to='/login'>
                    <button>Login</button>
                </Link>
                <Link to='/signup'>
                    <button>Sign Up</button>
                </Link>
            </div>
        </nav >
    )
}