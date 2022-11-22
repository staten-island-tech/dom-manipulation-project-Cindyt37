const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.getElementById("name"),
  input2: document.getElementById("weapon"),
  input3: document.getElementById("url"),
  output: document.getElementById("output-box"),
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
        <h3 class="title">${input}</h3>
        <img class="image" src="${input3}">
        <h3 class="weapon">${input2}</h3>
        <button class="remove">Remove</button>
        </div>`
  );
  const removes = document.querySelectorAll(".remove");
  removes.forEach((eachRemove) => {
    eachRemove.addEventListener("click", () => {
      const outputs = document.querySelector(".output");
      outputs.remove();
      eachRemove.remove();
    });
  });
});
