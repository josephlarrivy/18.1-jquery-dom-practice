// When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
console.log('Let\'s get ready to party with jQuery!');

// Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$('article img').addClass('image-center');

// Remove the last paragraph in the article.
$('article').find('li:last').remove();

// Set the font size of the title to be a random pixel size from 0 to 100.
let rand = Math.floor(Math.random()*100);
$('#title').css('font-size', rand);

// Add an item to the list; it can say whatever you want.
$('ol').append('<li>New Item</li>');

// Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$('aside ol').remove();
$('aside h4').remove();
$('aside').append('<p>sorry about that list</p>')

// When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$('.form-control').on('keyup blur change', function () {
    let r = $('.form-control').eq(0).val();
    let b = $('.form-control').eq(1).val();
    let g = $('.form-control').eq(2).val();
    $('body').css('background-color',"rgb(" + r + "," + g + "," + b+ ")");
  });

// Add an event listener so that when you click on the image, it is removed from the DOM.
$('img').on('click', function () {
    $(this).remove();
})