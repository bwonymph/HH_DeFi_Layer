//dragonglasstest.js


var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
if(this.readyState === 4) {
    console.log(this.responseText);
}
});

xhr.open("GET", "https://api-testnet.dragonglass.me/hedera/api/transactions?accountFrom=0.0.68333");
xhr.setRequestHeader("X-API-KEY", ""); //key omitted

xhr.send();