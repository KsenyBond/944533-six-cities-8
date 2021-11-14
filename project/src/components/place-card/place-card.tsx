import {Link} from 'react-router-dom';
import {AppRoute} from '../const';
import {Offer} from '../../types/offer';

type PlaceCardProps = {
  offer: Offer,
  onActiveHandler: (id: number) => void;
}

const MAX_RATING = 5;

function PlaceCard({offer, onActiveHandler}: PlaceCardProps): JSX.Element {
  const {
    isPremium,
    previewImage,
    price,
    rating,
    title,
    type,
    id,
  } = offer;

  const ratingPercent = rating * 100 / MAX_RATING;

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={()=>{onActiveHandler(id);}}
      onMouseLeave={()=>{onActiveHandler(0);}}
    >
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Room}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingPercent}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Room}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
