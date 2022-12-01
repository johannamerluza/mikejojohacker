document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#screenshotButton');
  button.addEventListener('click', (tab) => {
    chrome.tabs.captureVisibleTab((url) => {
      console.log(url);
      const imageDiv = document.querySelector('#image');
      const newImg = document.createElement('img');
      newImg.setAttribute('src', url);
      newImg.setAttribute('id', 'ss');
      imageDiv.appendChild(newImg);

      const prefix = 'data:image/jpeg;base64,';
      console.log(url.slice(0, 100));
      console.log(url.slice(prefix.length, 100));

      const payload = {
        requests: [
          {
            image: {
              content: url.slice(prefix.length),
            },
            features: [
              {
                type: 'TEXT_DETECTION',
              },
            ],
          },
        ],
      };

      // fetch({
      //   method: 'POST',
      //   url: 'https://vision.googleapis.com/v1/images:annotate',
      //   body: JSON.stringify(payload)
      // })
      // .then( (data) => alert(data))
      // async function postData(url) {
      //   await fetch({
      //     method: 'POST',
      //     url: 'https://vision.googleapis.com/v1/images:annotate',
      //     body: JSON.stringify(payload),
      //   }).then((data) => alert(data));
      // }
      // postData(url);
      // Simple POST request with a JSON body using fetch
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      };
      fetch(
        'https://vision.googleapis.com/v1/images:annotate?key=XXX',
        requestOptions
      ).then((response) => {
        const msg = response.json();
      });
    });
  });
});

// "Cloud Vision API has not been used in project 730620168332 before or it is disabled. Enable it by visiting https://console.developers.google.com/apis/api/vision.googleapis.com/overview?project=730620168332 then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry."

async function postData(url) {
  await fetch({
    method: 'POST',
    url: 'https://vision.googleapis.com/v1/images:annotate',
    body: JSON.stringify(payload),
  }).then((data) => alert(data));
}
postData(url);

// chrome.browserAction.onClicked.addListener(function (tab) {
// chrome.desktopCapture.chooseDesktopMedia(
//   ['screen', 'window', 'tab'],
//   tab,
//   (streamId) => {
//     //check whether the user canceled the request or not
//     if (streamId && streamId.length) {
//     }
//   }
// );
//   chrome.tabs.captureVisibleTab((url) => {
//     console.log(url);
//   });
// });
