const template = (strs, ...keys) => {
  let result = '';
  keys.forEach((val, i) => {
    result += strs[i];
    result += (Array.isArray(val)) ? val.join('') : val;
  });
  result += strs[strs.length - 1];
  return result;
};

const ago = (timestamp) => {
  const now = new Date().valueOf() / 1000;
  if (((now - timestamp) / 60) < 60) {
    return `${Math.floor((now - timestamp) / 60)} minutes ago`;
  }
  if (((now - timestamp) / 3600) < 24) {
    return `${Math.floor((now - timestamp) / 3600)} hours ago`;
  }
  return `${Math.floor((now - timestamp) / 86400)} days ago`;
};

const story = (d, k) =>
  `
    <li class="story-item">
      <div class="story-title">
      ${k + 1}. <a href="${d.url}" target="_blank">${d.title}</a>
      </div>
      <div class="story-misc">
        ${d.score} points by ${d.author}(karma: ${d.authorKarma}) ${ago(d.timestamp)}
      </div>
    </li>
  `;

const list = data =>
  template`
    <ul class="story-list">
      ${data.map((d, k) => story(d, k))}
    </ul>  
  `;

const content = data =>
  `
  <div class="container">
    <div class="header">Hacker News</div>
    <div class="main">
      ${list(data)}
    </div>
    <div class="footer">
      Author: <a href="https://github.com/mkora">mkora</a>
    </div>
  </div>    
  `;

export { content }; // eslint-disable-line import/prefer-default-export
