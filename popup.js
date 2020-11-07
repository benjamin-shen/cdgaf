document.addEventListener("DOMContentLoaded", function () {
  chrome.tabs.executeScript(null, {
    code: `
    console.log("popup.js hello World!");`,
  });
});
