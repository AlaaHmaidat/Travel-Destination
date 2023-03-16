import  Navbar  from '../Navbar/Navbar.js';
import '../reset.css'
import './Header.css';

function Header() {
    return (
        <div className='header'> 
            <h1>Travel Destination</h1>
            <Navbar />
        </div>
    );
}

export default Header;