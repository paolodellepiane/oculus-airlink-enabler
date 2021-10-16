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
          // lets close the window on autorun
          require('electron').remote.BrowserWindow.getFocusedWindow().close();
        } else {
          // if airlink enabled, manual open, return to home
          document.querySelector("a.navigation-pane__link--home").click();
	}
      }, 1000);
    } catch (e) {
      console.error(e);
      setTimeout(enable, 1000);
    }
  }, 1000);
})();
