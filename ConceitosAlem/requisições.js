require("fetch")
/*
fetch('https://api.example.com/data')
  .then(response =>JSON.parse(response) )
  .then(data => {
    // Manipule a resposta da requisição aqui
    console.log(data);
  })
  .catch(error => {
    // Trate erros de requisição aqui
    console.log(error);
  });


  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.example.com/data', true);
  
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 400) {
      var data = JSON.parse(xhr.responseText);
      // Manipule a resposta da requisição aqui
      console.log(data);
    } else {
      // Trate erros de requisição aqui
      console.log(xhr.status);
    }
  };
  
  xhr.onerror = function() {
    // Trate erros de requisição aqui
    console.log("Erro na requisição.");
  };
  
  xhr.send();  

  
  */
 
  fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
  .then(response => response.json())
  .then(data => {
    // Manipule a resposta da requisição aqui
    console.log(data);
  })
  .catch(error => {
    // Trate erros de requisição aqui
    console.log(error);
  });

  /*
    headers: {
    'Content-Type': 'application/json', // Os cabeçalhos da requisição
    'Authorization': 'Bearer your_token' // Exemplo de cabeçalho de autorização
  },
  body: JSON.stringify({ key: 'value' }) // O corpo da requisição (apenas para POST, PUT, DELETE, etc.)
};

fetch('https://api.example.com/data', config)
  .then(response => response.json())
  .then(data => {
    // Manipule a resposta da requisição aqui
    console.log(data);
  })
  .catch(error => {
    // Trate erros de requisição aqui
    console.log(error);
  });
  */