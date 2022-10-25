var playerNumber = Math.floor(Math.random() * 6) + 1;
var computerNumber = Math.floor(Math.random() * 6) + 1;

console.log(playerNumber);
console.log(computerNumber);

if (playerNumber > 6) {
    alert('Metti un numero accettabile');
}
if (playerNumber > computerNumber) {
    console.log('Hai vinto contro un computer, complimenti')
}

if (playerNumber < computerNumber) {
    console.log('Hai perso contro qualcosa senza cervello lol')
}

if (playerNumber === computerNumber) {
    console.log('Sei allo stesso livello di un computer, freddo e senza emozioni, avete pareggiato')
}
