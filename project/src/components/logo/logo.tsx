import {NavLink} from 'react-router-dom';
import {AppRoute} from '../const';

type LogoProps = {
  isActive?: boolean;
}

function Logo({isActive = false}: LogoProps): JSX.Element {
  return (
    <NavLink className="header__logo-link" activeClassName={isActive ? 'header__logo-link--active' : ''} to={AppRoute.Main}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"  />
    </NavLink>
  );
}

export default Logo;
