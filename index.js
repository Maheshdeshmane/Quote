var result;

 

 fetch("https://type.fit/api/quotes")

  .then(function(response) {

    return response.json();

  })

  .then(function(data) {

    result = data;

 

  });

 

document.getElementById("btn").addEventListener("click", function() {

    const data = result[Math.floor(Math.random() * result.length)];

    document.getElementById('quote').innerHTML = data.text;

    document.getElementById('author').innerHTML = data.author;

});
