import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logos/bumblebee-white.svg';

const Header = () => (
  <div className='header'>
    <div className='logo-container'>
      <Link to='/'>
        <Logo className='logo' />
      </Link>
    </div>
    <div className='navbar'>
      <Link to='/about'>ABOUT ME</Link>
      <Link to='/contact'>CONTACT ME</Link>
    </div>
  </div>
);

export default Header;
