// floating label
var input = document.querySelectorAll('.form-input');
// var label = document.querySelectorAll('.form-label');


for (var i = 0; i < input.length; i++) {
    input[i].onblur = function () {
        var label = this.parentElement.querySelector('.form-label');
        if (this.value !== "") {
            label.classList.add('floating')
        } else {
            label.classList.remove('floating')
        }
    }
}