import Logo from '../logo/logo';
import HeaderNav from '../header-nav/header-nav';
import PlacesList from '../places-list/places-list';
import PlacesListEmpty from '../places-list-empty/places-list-empty';
import Map from '../map/map';
import {Offer, Point} from '../../types/offer';
import clsx from 'clsx';
import {useState} from 'react';

type MainScreenProps = {
  offers: Offer[],
}

function MainScreen({offers}: MainScreenProps): JSX.Element {
  const points = offers.map((offer) => {
    const {id, location} = offer;
    return {id, location};
  });

  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(undefined);

  const handleActiveOffer = (id: number): void => {
    const currentPoint = points.find((point) =>
      point.id === id,
    );
    setSelectedPoint(currentPoint);
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo isMain />
            </div>
            <HeaderNav />
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className={clsx('cities__places-container container', !offers.length && 'cities__places-container--empty')}>
            {offers.length ? <PlacesList offers={offers} onActiveHandler={handleActiveOffer} /> : <PlacesListEmpty />}
            <div className="cities__right-section">
              <Map city={offers[0].city} points={points} selectedPoint={selectedPoint} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;

