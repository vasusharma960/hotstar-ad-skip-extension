const findBackIcon = () => {
  const backIcon = document.getElementsByClassName("icon-arrow-back");
  console.log("backIcon ====> ", backIcon);

  if (backIcon && backIcon.length > 0) {
    setTimeout(() => {
      backIcon[0].click();
      console.log("backIcon click success====> ");

      setTimeout(() => {
        console.log("backIcon find cancel btn====> ");
        findAndClickCancelButton();
      }, 1000);
    }, 1000);
  }
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
