// display, card numbers inputs and logo change

const inputLines = document.querySelectorAll(".cc-inputs input");

const logoTag = document.getElementById("logochange");
document
  .querySelector("[name='surpriseLine']")
  .addEventListener("input", OnlineTag);

function restrictInput() {
  const firstNumber = document.getElementById("cc-1").value[0];
  const input1 = document.getElementById("cc-1").value;
  const input2 = document.getElementById("cc-2").value;
  const input3 = document.getElementById("cc-3").value;
  const input4 = document.getElementById("cc-4").value;

  const Display1 = document.getElementById("Display1");
  const Display2 = document.getElementById("Display2");
  const Display3 = document.getElementById("Display3");
  const Display4 = document.getElementById("Display4");

  Display1.textContent = inputLines[0].value;
  Display2.textContent = inputLines[1].value;
  Display3.textContent = inputLines[2].value;
  Display4.textContent = inputLines[3].value;

  const numberTag = Number(firstNumber);
  if (numberTag === 2) {
    logoTag.innerHTML = `<img src="../image/mastercard.svg" alt="">`;
  } else if (numberTag === 3) {
    logoTag.innerHTML = `<img src="../image/AmericanExpress.png" alt="">`;
  } else if (numberTag === 4) {
    logoTag.innerHTML = `<img src="../image/visalogo.svg" alt="">`;
  } else if (numberTag === 5) {
    logoTag.innerHTML = `<img src="../image/mastercard.svg" alt="">`;
  }
}

function OnlineTag(event) {
  let input = event.target;

  if (input.nextElementSibling && input.value.length > 3) {
    input.nextElementSibling.focus();
  }
}

function isNumber(evt) {
  evt = evt ? evt : window.event;
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

// display and frontcover and backcover rotate on cvv hover
function CardHolderDisplay() {
  document.querySelector(".card-holder-name").innerText =
    document.querySelector(".card-holder-input").value;
}

function CvvHooverEnter() {
  document.querySelector(".frontcover").style.transform =
    "perspective(1000px) rotateY(-180deg)";
  document.querySelector(".backcover").style.transform =
    "perspective(1000px) rotateY(0deg)";
}

function CvvHooverLeave() {
  document.querySelector(".frontcover").style.transform =
    "perspective(1000px) rotateY(0deg)";
  document.querySelector(".backcover").style.transform =
    "perspective(1000px) rotateY(180deg)";
}

document.querySelector(".month-input").oninput = () => {
  document.querySelector(".exp-month").innerText =
    document.querySelector(".month-input").value;
};

document.querySelector(".year-input").oninput = () => {
  document.querySelector(".exp-year").innerText =
    document.querySelector(".year-input").value;
};

document.querySelector(".cvv-input").oninput = () => {
  document.querySelector(".cvv-box").innerText =
    document.querySelector(".cvv-input").value;
};

// alert when form is submitted
const form = document.getElementById("validate");

function submitForm() {
  if (form.checkValidity()) {
    alert("Your payment was successful!");
  } else {
    return false;
  }
}
