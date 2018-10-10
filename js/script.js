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

var tooltip = document.querySelectorAll('.tooltip');
console.log(tooltip);
var text = '';
for (var i = 0; i < tooltip.length; i++) {
    tooltip[i].onmouseover = function () {
        text = this.dataset.text;
        if (text !== undefined) {
           var tooltipText = this.nextElementSibling;
            tooltipText.style.opacity = 1;
            tooltipText.innerText = text;
        }
    };

    tooltip[i].onmouseout = function () {
        this.nextElementSibling.style.opacity = 0;
    }
}