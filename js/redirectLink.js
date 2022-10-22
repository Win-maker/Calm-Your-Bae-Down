///// copying Link to clipBoard

const copyLink = document.getElementById("copyLink");
let LinkUrlTextBox = document.getElementsByClassName("Link")[0];

copyLink.addEventListener("click", () => {
  navigator.clipboard.writeText(LinkUrlTextBox.textContent);
});

// displaying Link

let getEmailToDisplay = localStorage.getItem("email");
LinkUrlTextBox.textContent = `https://www.bae-calm-down.github.io?email=${getEmailToDisplay}`;


//Store url in localstorage to decript
let urlToDecrypt = 'https://www.bae-calm-down.github.io?email=' + getEmailToDisplay;
// console.log('show result.. ',urlToDecrypt);
localStorage.setItem("emailToDecrypt", urlToDecrypt);