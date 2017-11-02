import { config } from './config';

export default class Model {
  constructor(service) {
    this.service = service;
    this.dataLifetime = config.localDataLifetime;
    this.storageKey = config.localStorageKey;
  }

  get() {
    const localData = JSON.parse(window.localStorage.getItem(this.storageKey));

    if (this.isUpdated(localData)) {
      return new Promise(resolve => resolve(localData.data));
    }

    return this.service.fetch()
      .then(data => data.map(Model.createData))
      .then((data) => {
        /* global window */
        /* eslint no-undef: "error" */
        window.localStorage.setItem(this.storageKey, JSON.stringify({
          lastUpdated: new Date().valueOf(),
          data,
        }));
        return data;
      });
  }

  isUpdated(data) {
    if (data === null || data.lastUpdated === undefined) return false;
    return (new Date().valueOf() - data.lastUpdated) < this.dataLifetime;
  }

  static createData(data) {
    const [id, title, url, timestamp, score, author, authorKarma] = data;
    return {
      id,
      title,
      url,
      timestamp,
      score,
      author,
      authorKarma
    };
  }
}
