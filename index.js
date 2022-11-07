const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  points: document.querySelectorAll(".point"),
  box: document.getElementById("big-black-box"),
};
DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});

function changerLi() {
  let pointIndex = 1;
  DOMSelectors.points.forEach((point) => {
    point.addEventListener("click", function () {
      point.textContent = `Hello I am point ${pointIndex}`;
      pointIndex--;
    });
  });
}
changerLi();

const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector(`#input`),
};

// const cat = "meow";
// DOMSelectors.box.insertAdjacentHTML("afterend", `<h1>We are an </h1>`);
DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("afterend", `<p>${input}</p>`);
  DOMSelectors.input.value = "";
  console.log(input);
});
