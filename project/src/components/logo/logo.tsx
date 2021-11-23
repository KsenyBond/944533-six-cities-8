import {NavLink} from 'react-router-dom';
import {AppRoute} from '../const';

type LogoProps = {
  isMain?: boolean;
}

function Logo({isMain = false}: LogoProps): JSX.Element {
  return (
    <NavLink className="header__logo-link" activeClassName="header__logo-link--active" isActive={() => isMain} to={AppRoute.Main}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"  />
    </NavLink>
  );
}

export default Logo;
