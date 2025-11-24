const myCheckedbox = document.getElementById("myCheckedbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const submit = document.getElementById("submit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submit.onclick = function () {
  if (myCheckedbox.checked) {
    subResult.textContent = `You are Subscribed`
  }
  else {
    subResult.textContent = `You are Not Subscribed`
  }

  if (visaBtn.checked) {
    paymentResult.textContent = `You are paying with Visa`
  }
  else if (mastercardBtn.checked) {
    paymentResult.textContent = `You are paying with Mastercard`
  }
  else if (paypalBtn.checked) {
    paymentResult.textContent = `You are paying with Paypal`
  }
  else{
    paymentResult.textContent = `You did not select a payment type`
  }
}