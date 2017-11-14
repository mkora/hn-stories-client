import config from './config';

export default class Model {
  constructor(service) {
    this.service = service;
    this.dataLifetime = config.localDataLifetime;
    this.storageKey = config.localStorageKey;
  }

  get() {
    const localData = this.getLocal();

    if (this.isLocalUpdated(localData)) {
      return new Promise(resolve => resolve(localData.data));
    }

    return this.service.fetch()
      .then(data => data.map(Model.createObj))
      .then(data => this.saveLocal(data));
  }

  isLocalUpdated(data) {
    if (data === null || data.lastUpdated === undefined) return false;
    return (new Date().valueOf() - data.lastUpdated) < this.dataLifetime;
  }

  getLocal() {
    return JSON.parse(window.localStorage.getItem(this.storageKey));
  }

  saveLocal(data) {
    /* global window */
    /* eslint no-undef: "error" */
    window.localStorage.setItem(this.storageKey, JSON.stringify({
      lastUpdated: new Date().valueOf(),
      data,
    }));
    return data;
  }

  static createObj(data) {
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
