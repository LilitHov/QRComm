// floating label
var input = document.querySelectorAll('.form-input');
// var label = document.querySelectorAll('.form-label');


for (var i = 0; i < input.length; i++) {
    input[i].onblur = function () {
        // if (this.classList.contains('form-input')) {
        //     alert('true')
        // }
        var label = this.parentElement.querySelector('.form-label');
        if (this.value !== "") {
            label.classList.add('floating')
        } else {
            label.classList.remove('floating')
        }
    }
}


// Tooltip

var tooltips = document.querySelectorAll('.tooltip');
// console.log(tooltips);
var text = '';
var tooltipsLength = tooltips.length;
for (let i = 0; i < tooltipsLength; i++) {
    var tooltipText = tooltips[i].nextElementSibling;
    text = tooltips[i].dataset.text;
    tooltipText.innerText = text;
    if (text !== undefined) {
        tooltips[i].onmouseover = function () {
            tooltipText.classList.add('show');
        };

        tooltips[i].onmouseout = function () {
            tooltipText.classList.remove('show');
        }
    }
}