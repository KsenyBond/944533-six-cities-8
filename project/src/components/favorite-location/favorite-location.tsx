import FavoritePlaceCard from '../favorite-place-card/favorite-place-card';
import {Offer} from '../../types/offer';

type FavoriteLocationProps = {
  offer: Offer,
}

function FavoriteLocation({offer}: FavoriteLocationProps): JSX.Element {
  return (
    <li className="favorites__locations-items" key={Math.random()}>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{offer.city.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <FavoritePlaceCard
          key={offer.id}
          offer={offer}
        />
      </div>
    </li>
  );
}

export default FavoriteLocation;
