
// get url from loacal stoarage to decript
let  getUrlToDecript = localStorage.getItem('emailToDecrypt');
console.log('Now got it ...', getUrlToDecript);


// use URLSearchParams to get email from url
const paramStr = getUrlToDecript;
const searchParams = new URLSearchParams(paramStr);

//use get method to get email
const getEmail = searchParams.get('https://www.bae-calm-down.github.io?email');

//decript email
let decrpytResult = window.atob(getEmail);
console.log(decrpytResult);




