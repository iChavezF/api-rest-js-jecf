


var misCabeceras = new Headers();

var miInit = { method: 'GET',
               headers: misCabeceras,
               mode: 'cors',
               cache: 'default' };

fetch('https://api-lindo-detalle.herokuapp.com/api/product',miInit)
.then(function(response) {
  return response.json();
})
.then(function(miJson) {
  var objectURL = URL.createObjectURL(miBlob);
  miImagen.src = objectURL;
});