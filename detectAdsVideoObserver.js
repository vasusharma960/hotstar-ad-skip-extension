alert("Observer script loaded");

let observer;

const mutationsCallback = (mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === "childList") {
      const addedNodes = Array.from(mutation.addedNodes);

      addedNodes.forEach((node) => {
        if (
          node.nodeType === Node.ELEMENT_NODE &&
          node.tagName.toLowerCase() === "video"
        ) {
          // click button logic
          alert("ad video found");
        }
      });
    }
  }
};

const createNewObserver = () => {
  observer = new MutationObserver(mutationsCallback);
};

const startObserving = () => {
  observer.observe(document.body, { childList: true, subTree: true });
};

const disconnectAndStopObserving = () => {};

const checkAndStartObserving = () => {
  if (observer) {
    console.log("Already Observing of ad video tags");
  } else {
    createNewObserver();
    startObserving();
  }
};

checkAndStartObserving();

// export default observer;
