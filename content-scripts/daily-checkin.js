const continueButton = document.getElementById("continue");
continueButton && continueButton.click();

const questions = document.getElementById("questions");
if (questions) {
  const fieldsets = questions
    .getElementsByTagName("form")[0]
    .getElementsByTagName("fieldset");
  for (const fieldset of fieldsets) {
    if (fieldset.style.display !== "none") {
      const choices = fieldset.getElementsByTagName("ul")[0].children;
      for (const choice of choices) {
        const answer = choice.getElementsByTagName("input")[0];
        if (answer && answer.getAttribute("value") === "no") {
          answer.click();
        }
      }
    }
  }
}
