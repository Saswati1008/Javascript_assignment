let button = document.querySelector("button");
let label = document.querySelector("label");
let input = document.querySelector("input");
let div = document.querySelector(".main");
button.style.backgroundColor = "green";
let isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
input.addEventListener("click", () => {
  label.textContent = "Enter number value on the input box";
});
button.addEventListener("click", () => {
  label.textContent = "Enter number value on the input box";
  div.innerHTML = "";
  let value = parseInt(input.value);

  if (!isNaN(value) && value >= 0) {
    for (let i = 0; i <= value; i++) {
      const box = document.createElement("div");
      box.className = "box";
      box.textContent = i;

      if (i % 2 === 0) {
        box.style.backgroundColor = "green"; // even numbers
      } else if (isPrime(i)) {
        box.style.backgroundColor = "red"; // prime numbers
      } else {
        box.style.backgroundColor = "yellow";
      }

      div.appendChild(box);
    }
    label.textContent = "Generated!";
  } else {
    label.textContent = "Enter a valid number";
    input.value = "";
  }

  // clear input after generating
  input.value = "";
});
