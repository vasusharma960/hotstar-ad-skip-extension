chrome.runtime.onInstalled.addListener(() => {
  console.log("Background service worker installed.");
});

chrome.webNavigation.onHistoryStateUpdated.addListener(
  (details) => {
    console.log(details);
    if (details.url.includes("/watch")) {
      console.log("injecting script");
      chrome.scripting
        .executeScript({
          target: { tabId: details.tabId },
          files: ["detectAdsVideoObserver.js"],
        })
        .then(() => console.log("observer script injected"))
        .catch((e) => console.error(e));
    }
  },
  {
    url: [
      {
        hostContains: "hotstar.com",
        pathContains: "watch",
      },
    ],
  }
);
