alert("Observer script loaded");

let observer;

const mutationsCallback = (mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === "childList") {
      const addedNodes = Array.from(mutation.addedNodes);

      addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.tagName.toLowerCase() === "video") {
            // click button logic
            const noOfVideoTags = document.getElementsByTagName("video");

            if (noOfVideoTags.length > 1) {
              alert("ad video found");
              clickSkipAdsButton();
            }
          }
        }
      });
    }
  }
};

const createNewObserver = () => {
  observer = new MutationObserver(mutationsCallback);
};

const startObserving = () => {
  observer.observe(document.body, { childList: true, subtree: true });
};

const disconnectAndStopObserving = () => {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
};

const checkAndStartObserving = () => {
  if (observer) {
    console.log("Already Observing of ad video tags");
  } else {
    createNewObserver();
    startObserving();
  }
};

const findSkipBtn = (btn) => {
  if (!btn) {
    return false;
  }

  if (btn.nodeType === 3 && btn.textContent === "Go Ads free") {
    return true;
  }

  return findSkipBtn(btn.firstChild);
};

const clickSkipAdsButton = () => {
  const btns = document.getElementsByTagName("button");
  const length = btns.length;

  for (let i = 0; i < length; i++) {
    const currentBtn = btns[i];

    if (findSkipBtn(currentBtn)) {
      currentBtn.click();
    }
  }
};

checkAndStartObserving();

window.addEventListener("unload", () => {
  disconnectAndStopObserving();
});
