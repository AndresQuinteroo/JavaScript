

document.querySelector(".submitButton").onclick = function () {
  username = document.querySelector(".userInput").value
  if (username === "Andres" || username ===  "Andres Quintero") {
    document.querySelector(".welcome").textContent = `Welcome ${username}`
    document.querySelector(".text").textContent = `You are my creator!!`
  }
  else {
    document.querySelector(".welcome").textContent = `Welcome ${username}`
    document.querySelector(".text").textContent = `Andres is my creator!!`
  }
}
