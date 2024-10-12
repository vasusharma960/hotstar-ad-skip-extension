// content.js

// let observer;
// alert("observer file loaded");
// // Function to start observing for video tags
// function startObserving() {
//   if (observer) {
//     console.log("Already observing.");
//     return; // Avoid starting multiple observers
//   }

//   observer = new MutationObserver((mutations) => {
//     for (const mutation of mutations) {
//       if (mutation.type === "childList") {
//         const addedNodes = Array.from(mutation.addedNodes);
//         addedNodes.forEach((node) => {
//           if (node.nodeType === Node.ELEMENT_NODE) {
//             if (node.tagName.toLowerCase() === "video") {
//               alert("Ad video found: 1");
//               console.log("Ad video found:", node);
//             }
//           }
//         });
//       }
//     }
//   });

//   observer.observe(document.body, {
//     childList: true,
//     subtree: true, // Observe all descendant nodes
//   });

//   console.log("Started observing for video tags.");
// }

// // Function to stop observing
// function stopObserving() {
//   if (observer) {
//     observer.disconnect();
//     observer = null;
//     console.log("Stopped observing for video tags.");
//   }
// }

// // Check the current path and start or stop observing as needed
// function checkPath() {
//   const isWatchPath = location.pathname.includes("/watch");
//   if (isWatchPath) {
//     startObserving();
//   } else {
//     stopObserving();
//   }
// }

// // Initial check for the path
// checkPath();

// // Listen for popstate events (for browser navigation)
// window.addEventListener("popstate", checkPath);

// // Override pushState to check for path changes
// const originalPushState = history.pushState;
// history.pushState = function (...args) {
//   originalPushState.apply(this, args);
//   checkPath();
// };

// // Monitor for URL changes using MutationObserver
// const observerUrl = new MutationObserver(() => {
//   checkPath();
// });
// observerUrl.observe(document.body, { childList: true, subtree: true });

// // Initial check for video tags (if the page loads with a video already)
// if (location.pathname.includes("/watch")) {
//   const videos = document.querySelectorAll("video");
//   if (videos.length > 0) {
//     alert("Ad video found: 2");
//     console.log("Initial ad video found:", videos[videos.length - 1]);
//   }
// }
