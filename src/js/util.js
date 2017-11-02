const request = url => new Promise((resolve, reject) => {
  /* global XMLHttpRequest */
  /* eslint no-undef: "error" */
  const xhr = new XMLHttpRequest();

  xhr.onload = () => {
    if ((xhr.readyState === 4) && (xhr.status === 200)) {
      try {
        const res = JSON.parse(xhr.response);
        resolve(res);
      } catch (err) {
        reject(err);
      }
    } else {
      reject(new Error(`Server Error. ${xhr.statusText}.`));
    }
  };
  xhr.ontimeout = () => reject(new Error('Server Error. Timout occerred.'));
  xhr.onerror = () => reject(Error('Server Error. Network error.'));

  xhr.open('GET', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
});


export { request }; // eslint-disable-line import/prefer-default-export
