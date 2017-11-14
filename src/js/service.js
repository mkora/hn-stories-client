import { request } from './util';
import config from './config';

export default class Service {
  constructor() {
    this.url = config.apiEndPoint;
    this.blankURLStory = config.blankURLStory;
  }

  async fetch() {
    try {
      const data = await request(`${this.url}topstories.json`);
      if (!Array.isArray(data) || data.length === 0) {
        return Promise.reject(new Error('No data has been returned.'));
      }

      const ids = [];
      for (let i = 0; i < 10; i += 1) ids[i] = data[Math.floor(Math.random() * data.length)];

      const stories = await Promise.all(ids.map(async (id) => {
        try {
          const story = await request(`${this.url}item/${id}.json`);
          const author = await request(`${this.url}user/${story.by}.json`);
          return [
            story.id,
            story.title,
            story.url || this.blankURLStory + story.id,
            story.time,
            story.score,
            story.by,
            author.karma
          ];
        } catch (err) {
          return Promise.reject(err);
        }
      }));

      return stories;
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
