// Przykład 1
var input1 = document.getElementById('input1')
var heading1 = document.getElementsByTagName('h1')[0]

function onInputChange() {
    heading1.innerText = input1.value
}

// Przykład 2
var input2 = document.getElementById('input2')
var heading2 = document.getElementsByTagName('h2')[0]

function onButtonClick() {
    heading2.innerText = input1.value
}

// Przykład 3
var colorDropdown = document.getElementsByClassName('dropdown')[0]
var heading3 = document.getElementsByTagName('h3')[0]

function onChangeHandler() {
    heading3.classList = ""
    heading3.classList.add(colorDropdown.value)
}

// Przykład 4
var heading4 = document.getElementsByTagName('h4')[0]

function replaceMarkup() {
    heading4.innerHTML = "<img src='https://preview.redd.it/rz3o1yibnc511.png?auto=webp&v=enabled&s=1c2ba9ddf22299914708336f83a5ac66d6c1a242'/>"
}