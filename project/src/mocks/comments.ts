import {Comment} from '../types/offer';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const comments: Comment[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/1.png',
      id: 4,
      isPro: false,
      name: 'Max',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 2,
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: false,
      name: 'Ben',
    },
  },
  {
    comment: 'Great location near the foodie street rue Montorgeuil and several Metro stations. There’s a lift but some rooms still have stairs to reach them.\n' +
      'The staff were all very friendly and helpful.',
    date: '2019-05-08T14:13:56.569Z',
    id: 3,
    rating: 5,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: false,
      name: 'Nick',
    },
  },
  {
    comment: 'Everything was great but if I need to pick one thing maybe say that the shower doesn’t have a curtain/ door so when showering all the water tends to spill over the bath floor so not ideal.',
    date: '2019-05-08T14:13:56.569Z',
    id: 4,
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      isPro: false,
      name: 'Gregory',
    },
  },
];
