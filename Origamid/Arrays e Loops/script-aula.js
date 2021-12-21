var videoGames = ['Swift', 'PS4', 'Xbox', '3DS'];

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === 'PS4') {
    break;
  }
}

var frutas = ['Banana', 'Pera', 'Abacaxi', 'Uva'];

frutas.forEach(function (fruta) {
  console.log(fruta);
});
