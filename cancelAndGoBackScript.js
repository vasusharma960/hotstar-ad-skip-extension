(function () {
  const findBackIcon = () => {
    const startTime = Date.now();

    const findBackIconInterval = setInterval(() => {
      const backIconList = document.getElementsByClassName("icon-arrow-back");

      if (backIconList && backIconList.length > 0) {
        clearInterval(findBackIconInterval);
        setTimeout(() => {
          backIconList[0].click();
          console.log("backIcon click success====> ");

          setTimeout(() => {
            console.log("backIcon find cancel btn====> ");
            findAndClickCancelButton();
          }, 1000);
        }, 1000);
      } else if (Date.now() > startTime) {
        clearInterval(findBackIconInterval);
        console.error("Back Icon not found.");
      }
    }, 500);
  };

  const findAndClickCancelButton = () => {
    const btns = document.getElementsByTagName("button");
    const length = btns.length;

    console.log("backIcon cancel btn list====> ", btns);

    for (let i = 0; i < length; i++) {
      const currentBtn = btns[i];

      if (findCancelBtn(currentBtn)) {
        currentBtn.click();
      }
    }
  };

  const findCancelBtn = (btn) => {
    if (!btn) {
      return false;
    }

    if (btn.nodeType === 3 && btn.textContent === "Cancel and Go Back") {
      return true;
    }

    return findCancelBtn(btn.firstChild);
  };

  findBackIcon();
})();
