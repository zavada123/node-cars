document.addEventListener("DOMContentLoaded", () => {
  let name = document.querySelector("#name");
  let price = document.querySelector("#price");
  let url = document.querySelector("#url");
  let button = document.querySelector("button");

  let car = {
      name: null,
      price: null,
      url: null
  }

  button.addEventListener("click", () => {
    car = {
        name: name.value,
        price: price.value,
        url: url.value
    }

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/cars/data");
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.send(JSON.stringify(car));
  });
});
