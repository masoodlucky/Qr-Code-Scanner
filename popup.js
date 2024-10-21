// popup.js
document.getElementById('scan').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'captureScreenshot' }, response => {
      const dataUrl = response.dataUrl;
      // Process the screenshot dataUrl
      console.log('Captured screenshot data URL:', dataUrl);
      // Now you can use `dataUrl` with your QR code scanning logic
    });
  });
});
