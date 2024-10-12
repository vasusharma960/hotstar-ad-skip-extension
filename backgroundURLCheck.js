chrome.runtime.onInstalled.addListener(() => {
  console.log("Background service worker installed.");
});

chrome.webNavigation.onHistoryStateUpdated.addListener(details => {
    console.log("details ====> ", details);
}, {
  url: [{
    hostContains: "hotstar.com",
    pathContains: "watch"
  }]
}
);