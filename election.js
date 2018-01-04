document.addEventListener("DOMContentLoaded", function() {

var candidatesList = document.querySelector('#candidates-list')

  // Imagination!

$.ajax({
  url: 'https://bb-election-api.herokuapp.com/',
  method: 'GET',
  dataType: 'JSON'
}).done(function(responseData){
  console.log(responseData['candidates'][0]);
  for(var index = 0; index < responseData['candidates'].length; index++){
    var candidate = document.createElement('li');
    var candidateData = ("Name: " + responseData['candidates'][index].name + " " + "Votes: " + responseData['candidates'][index].votes);
    candidate.innerText = candidateData
    candidatesList.appendChild(candidate)
  };
});

});
