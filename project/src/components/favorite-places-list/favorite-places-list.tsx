import {Offer} from '../../types/offer';
import FavoriteLocation from '../favorite-location/favorite-location';

type FavoritePlacesListProps = {
  offers: Offer[],
}

function FavoriteLocationsList({offers}: FavoritePlacesListProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  favoriteOffers.sort((a, b) => a.city.name.localeCompare((b.city.name)));

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {favoriteOffers.map((offer) => (
          <FavoriteLocation
            key={offer.id}
            offer={offer}
          />
        ))}
      </ul>
    </section>
  );
}

export default FavoriteLocationsList;
