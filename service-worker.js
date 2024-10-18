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

chrome.webNavigation.onCompleted.addListener(
  (details) => {
    console.log(details);
    if (details.url.includes("/payment/checkout")) {
      console.log("injecting cancelAndGoBackScript");

      chrome.scripting
        .executeScript({
          target: { tabId: details.tabId },
          files: ["cancelAndGoBackScript.js"],
        })
        .then(() => console.log("cancel and skip ad script injection success"))
        .catch((e) => console.error(e));
    }
  },
  {
    url: [
      {
        hostContains: "hotstar.com",
        pathContains: "/payment/checkout",
      },
    ],
  }
);
