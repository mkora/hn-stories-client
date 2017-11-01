export const config = { // eslint-disable-line import/prefer-default-export
  /**
   * API Settings
   */
  apiEndPoint: 'https://hacker-news.firebaseio.com/v0/',
  /**
   * App Settings
   */
  blankURLStory: 'https://news.ycombinator.com/item?id=',
  localDataLifetime: 600000, // 10 min
  localStorageKey: 'client:hnews-stories',
};
