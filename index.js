const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector(`#name`),
  input2: document.querySelector(`#weapon`),
  input3: document.querySelector(`#url`),
  output: document.getElementById("output"),
};

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.input.value = "";
  let input2 = DOMSelectors.input2.value;
  DOMSelectors.input2.value = "";
  let input3 = DOMSelectors.input3.value;
  DOMSelectors.input3.value = "";
  DOMSelectors.output.insertAdjacentHTML(
    "afterbegin",
    `<div class="output">
        <h3 id="title">${input}</h3>
        <h3>${input2}</h3>
        <img class="image" src="${input3}">
        <br>
        <button class= "remove" onclick=">Remove</button></div>`
  );
  function removeOutput() {
    DOMSelectors.forEach((removeButton) => {
      removeButton.remove();
    });
  }
  removeOutput();
});
