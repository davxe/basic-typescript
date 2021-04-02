var titleElement = document.getElementById('title');
if (titleElement) {
    titleElement.innerHTML = 'hey i am learning typescript';
    titleElement.onclick = function () {
        console.log('clicked');
    };
}
var getValue = function () {
    var inputElement = document.getElementById('name');
    if (inputElement) {
        console.log("input value", inputElement.value);
    }
};
