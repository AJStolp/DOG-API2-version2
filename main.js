'use strict';

function getDogImage(){
    const userInput = $( "#userNum" ).val();
    const options = {method: 'GET'};
    fetch
    (`https://dog.ceo/api/breeds/image/random/${userInput}`, options)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert ('Something Happened behind the scenes, sorry ;(. Please Try Again!'))
}

function displayResults(responseJson) {
    console.log(responseJson);

    let img = responseJson.message.reduce((acc, i) => {
      acc = acc + `<img src="${i}" class="image-response"/>`;
      return acc;
    }, '');
  console.log(img);
    $('#img').html(img)
    $('.results').removeClass('hidden');
}

function preventDefault() {
    $('form').submit(e =>{
        e.preventDefault();
        getDogImage();
    })
}

preventDefault();