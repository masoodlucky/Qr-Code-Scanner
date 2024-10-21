// content.js

// Function to capture a screenshot of the page
function captureScreenshot() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = document.documentElement.scrollWidth;
  canvas.height = document.documentElement.scrollHeight;
  ctx.drawImage(document.documentElement, 0, 0);
  return canvas.toDataURL('image/png');
}

// Add a listener for messages from popup.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'captureScreenshot') {
    const dataUrl = captureScreenshot();
    sendResponse({ dataUrl: dataUrl });
  }
});
