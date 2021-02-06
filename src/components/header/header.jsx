import { Link } from 'react-router-dom';

const Header = () => (
  <div className='header'>
    <div className='logo'>
      <Link to='/'>logo</Link>
    </div>
    <div className='navbar'>
      <Link to='/about'>ABOUT ME</Link>
      <Link to='/contact'>CONTACT ME</Link>
    </div>
  </div>
);

export default Header;
