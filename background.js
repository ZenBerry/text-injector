// background.js

// Handle the browser action (clicking on the plugin's icon)
chrome.browserAction.onClicked.addListener(function(tab) {
  openOptionsPage(); // Open the options page in a new tab
});

// Function to open the options page in a new tab
function openOptionsPage() {
  chrome.tabs.create({ url: chrome.runtime.getURL("options.html") });
}
