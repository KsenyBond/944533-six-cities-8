import {Link} from 'react-router-dom';

type LogoProps = {
  isActive: boolean;
}

function Logo({isActive}: LogoProps): JSX.Element {
  return (
    <Link className={`${'header__logo-link'} ${isActive && 'header__logo-link--active'}`} to='/'>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"  />
    </Link>
  );
}

export default Logo;
