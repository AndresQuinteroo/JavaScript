// let username;

// username = window.prompt("What is your username?")
// console.log(username)




document.querySelector(".submit-button").onclick = function () {
  username = document.querySelector(".userInput").value;
  document.querySelector(".welcome").textContent = `Welcome ${username}`
  document.querySelector(".Username").textContent = `Your Username is ${username}`

  username = document.querySelector(".userInput").value = ''
}
