import { Link } from 'react-router-dom';
import './Navbar.css';
import blockchain from '../assets/blockchain.png';

const Navbar = () => {
  return (
    <Link to='/'>
      <div className='navbar'>
        <img src={blockchain} alt='icon' className='icon' />
        <h1 className='logo-title'>COIN TRACKER</h1>
      </div>
    </Link>
  );
};

export default Navbar;
