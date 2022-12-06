const DOMSelectors = {
  form: document.getElementById("form"),
  input: document.getElementById("name"),
  input2: document.getElementById("weapon"),
  input3: document.getElementById("url"),
  output: document.getElementById("output-box"),
};

DOMSelectors.form.addEventListener("submit", function () {
  event.preventDefault();
  enter();
  removeCard();
  clear();
});

function enter() {
  input = DOMSelectors.input.value;
  input2 = DOMSelectors.input2.value;
  input3 = DOMSelectors.input3.value;
  DOMSelectors.output.insertAdjacentHTML(
    "afterbegin",
    `<div class="output">
        <h3 class="title">${input}</h3>
        <h3 class="weapon">${input2}</h3>
        <img class="image" src="${input3}">
        <button class="remove">Remove</button>
        </div>`
  );

  function removeCard() {
    const removes = document.querySelectorAll(".remove");
    removes.forEach((eachRemove) => {
      eachRemove.addEventListener("click", function (button) {
        button.target.parentElement.remove();
      });
    });
  }

  function clear() {
    DOMSelectors.input.value = "";
    DOMSelectors.input2.value = "";
    DOMSelectors.input3.value = "";
  }
}

DOMSelectors = {
  form: document.getElementById("form"),
  description: document.getElementById("description"),
  name: document.getElementById("name"),
  image: document.getElementById("image"),
  output: document.getElementById("output"),
};

DOMSelectors.form.addEventListener("submit", function () {
  event.preventDefault();
  enterFunction();
  removebutton();
  resetInputs();
});

function enterFunction() {
  descript = DOMSelectors.description.value;
  title = DOMSelectors.name.value;
  image = DOMSelectors.image.value;
  DOMSelectors.output.insertAdjacentHTML(
    "afterbegin",
    `<div class="output">
                <h2>${title}</h2>
                <p>${descript}</p>
                <img class="output-image" src="${image}">
                <br>
                <button class="button">Remove</button>
        </div>`
  );
}

function removebutton() {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      this.parentElement.remove();
    });
  });
}

function resetInputs() {
  DOMSelectors.description.value = "";
  DOMSelectors.name.value = "";
  DOMSelectors.image.value = "";
}
