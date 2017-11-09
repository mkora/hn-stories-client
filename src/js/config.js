export const config = { // eslint-disable-line import/prefer-default-export
  /**
   * API Settings
   */
  apiEndPoint: 'https://hacker-news.firebaseio.com/v0/',
  /**
   * App Settings
   */
  blankURLStory: 'https://news.ycombinator.com/item?id=',
  localDataLifetime: 120000, // 2 min
  localStorageKey: 'client:hnews-stories',
};
