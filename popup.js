document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded");
  chrome.tabs.executeScript(null, { code: `console.log("Hello World!");` });
});
