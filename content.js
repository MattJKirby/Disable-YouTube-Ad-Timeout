// content.js

// Find the element
const dialog = document.querySelector('tp-yt-paper-dialog')

function playVideo() {
  // Create and dispatch a keydown event for the "K" key
  var event = new KeyboardEvent('keydown', {
    key: 'k',
    code: 'KeyK',
    which: 75,
    keyCode: 75,
    charCode: 0,
    shiftKey: false,
    ctrlKey: false,
    altKey: false,
    metaKey: false,
  });

  // Dispatch the event to the document
  document.dispatchEvent(event);
}


// Remove the element if it exists
if (dialog) {
  dialog.remove();
  console.log("removed youtube dialog")
  playVideo()
}