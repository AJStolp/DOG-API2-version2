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
    console.log(responseJson.message);

    let img = responseJson.message.map(i => {
        return `<img src="${i}" class="image-response">`;
      })

    $('.image-response').replaceWith(img)
    $('.results').removeClass('hidden');
}

function preventDefault() {
    $('form').submit(e =>{
        e.preventDefault();
        getDogImage();
    })
}

preventDefault();