(function () {
  setTimeout(function enable() {
    try {
      document.querySelector("a.navigation-pane__link--settings").click();
      document.querySelector("ul > div:nth-child(5) > li > a").click();
      setTimeout(() => {
        if (
          !document
            .querySelector("#AirLink + span")
            .className.includes("checked")
        ) {
          document.querySelector("#AirLink").click();
        }
      }, 1000);
    } catch (e) {
      console.error(e);
      setTimeout(enable, 1000);
    }
  }, 1000);
})();