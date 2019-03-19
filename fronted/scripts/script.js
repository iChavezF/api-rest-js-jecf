fetch('https://api-lindo-detalle.herokuapp.com/api/product')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });