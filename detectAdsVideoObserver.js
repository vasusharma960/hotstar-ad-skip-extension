(function () {
  alert("Observer script loaded");

  const mutationsCallback = (mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "childList") {
        const addedNodes = Array.from(mutation.addedNodes);
        addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.tagName.toLowerCase() === "video") {
              const noOfVideoTags = document.getElementsByTagName("video");

              if (noOfVideoTags.length > 1) {
                clickSkipAdsButton();
              }
            }
          }
        });
      }
    }
  };

  const createNewObserver = () => {
    console.log("observer created");
    return new MutationObserver(mutationsCallback);
  };

  const startObserving = (observer) => {
    console.log("observer observing");
    observer.observe(document.body, { childList: true, subtree: true });
  };

  const disconnectAndStopObserving = (observer) => {
    if (observer) {
      observer.disconnect();
      observer = null;
      console.log("observer present. disconected", observer);
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

  const checkAndStartObserving = () => {
    const observer = createNewObserver();
    startObserving(observer);

    if (!window.isPopstateEventListenerRegistered) {
      window.addEventListener("popstate", () => {
        if (observer && !window.location.href.includes("/watch")) {
          disconnectAndStopObserving(observer);
        }
      });
      window.isPopstateEventListenerRegistered = true;
    }
  };

  checkAndStartObserving();
})();
