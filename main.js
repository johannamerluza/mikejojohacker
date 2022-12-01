const button = document.querySelector('#screenshotButton');
button.addEventListener('click', (tab) => {
  chrome.tabs.captureVisibleTab((url) => {
    // alert(url);
    const body = document.querySelector('body');
    const newImg = document.createElement('img');
    newImg.setAttribute('src', url);
    newImg.setAttribute('id', 'ss');
    body.appendChild(newImg);
  });
});

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
