import Logo from '../logo/logo';
import HeaderNav from '../header-nav/header-nav';
import FavoritePlacesList from '../favorite-places-list/favorite-places-list';
import FavoritePlacesListEmpty from '../favorite-places-list-empty/favorite-places-list-empty';
import {Offer} from '../../types/offer';

type FavoritesScreenProps = {
  offers: Offer[],
}

function FavoritesScreen({offers}: FavoritesScreenProps): JSX.Element {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <HeaderNav />
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {offers.length ? <FavoritePlacesList offers={offers} /> : <FavoritePlacesListEmpty />}
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
