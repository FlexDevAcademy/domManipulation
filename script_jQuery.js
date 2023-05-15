// Przykład 1
var input1 = $('#input1')
var heading1 = $('h1')

function onInputChange() {
    heading1.text(input1.val())
}

// Przykład 2
var input2 = $('#input2')
var heading2 = $('h2')

function onButtonClick() {
    heading2.text(input2.val())
}

// Przykład 3
var colorDropdown = $('.dropdown')
var heading3 = $('h3')

function onChangeHandler() {
    heading3.removeClass()
    heading3.addClass(colorDropdown.val())
}

// Przykład 4
var heading4 = $('h4')

function replaceMarkup() {
    heading4.html("<img src='https://preview.redd.it/rz3o1yibnc511.png?auto=webp&v=enabled&s=1c2ba9ddf22299914708336f83a5ac66d6c1a242'/>")
}