//Grab images via img tag and assign to variable
var allImages = document.getElementsByTagName('img');

//Loop over images and add an event listener (mouseover)
for (var i = 0; i < allImages.length; i++) {
  allImages[i].addEventListener('mouseover', function() {

    //assign width and height of original image on webiste to variables
    var thisImageHeight = this.clientHeight;
    var thisImageWidth = this.clientWidth;

    //upate the attribute src of each image and include the width and height
    this.setAttribute('src', 'https://placedog.net/' + thisImageHeight + '/' + thisImageWidth)
  })
}
