import {Offer} from '../types/offer';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const offers: Offer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/room6.jpeg', 'img/room4.jpeg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/room6.jpeg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'Les cles du 27 Paris has well-equipped accommodation featuring free WiFi in Paris, 2 km from Arc de Triomphe and 2.5 km from Opéra Garnier.',
    goods: ['WiFi', 'Balcony', 'Air Conditioning', 'Hair Dryer', 'Kitchen', 'Microwave', 'Toaster'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      isPro: true,
      name: 'Reme',
    },
    id: 2,
    images: ['img/room7.jpeg', 'img/room8.jpeg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/room7.jpeg',
    price: 165,
    rating: 4.7,
    title: 'Cozy studio In A Rather Local Neighborhood',
    type: 'Studio',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'The apartment has 1 bedroom, a flat-screen TV with satellite channels, an equipped kitchen with a dishwasher and a microwave, a washing machine, and 1 bathroom with a shower. Towels and bed linen are available.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Microwave'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 5,
      isPro: true,
      name: 'Ameli',
    },
    id: 3,
    images: ['img/room3.jpeg', 'img/room4.jpeg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/room3.jpeg',
    price: 288,
    rating: 4.9,
    title: 'Amsterdam Studio Deluxe provides cozy and comfortable accommodation.',
    type: 'Studio',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'Montmartre Lovely in Paris features accommodation with free WiFi, 1.9 km from La Cigale Concert Hall, 2.4 km from Opéra Garnier and 2.8 km from Sacré-Coeur.',
    goods: ['Kitchen', 'Cable TV', 'Washing machine',  'Microwave'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 7,
      isPro: true,
      name: 'Lora',
    },
    id: 4,
    images: ['img/room5.jpeg', 'img/room6.jpeg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/room5.jpeg',
    price: 196,
    rating: 4.5,
    title: 'Great location and great basic apartment for exploring the city from!',
    type: 'Apartment',
  },
];