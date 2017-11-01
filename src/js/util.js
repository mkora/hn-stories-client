const request = url => new Promise((resolve, reject) => {
  /* global XMLHttpRequest */
  /* eslint no-undef: "error" */
  const xhr = new XMLHttpRequest();

  xhr.onload = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error(`An error occurred: ${xhr.statusText}`));
      }
    }
  };
  xhr.ontimeout = () => reject(new Error('Timout occerred'));

  xhr.open('GET', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
});


export { request }; // eslint-disable-line import/prefer-default-export
