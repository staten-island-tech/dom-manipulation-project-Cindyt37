const DOMSelectors = {
  button: document.getElementById("Enter"),
  name: document.querySelector(`name`),
  description: document.querySelector(`description`),
  url: document.querySelector(`url`),
  container: document.getElementById("container"),
};

DOMSelectors.button.addEventListener("click", function () {
  let name = DOMSelectors.name.value;
  DOMSelectors.box.insertAdjacentHTML("afterend", `<p>${name}</p>`);
  DOMSelectors.input.value = "";
});
