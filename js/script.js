// floating label
var input = document.querySelectorAll('.form-input');
// var label = document.querySelectorAll('.form-label');


for (var i = 0; i < input.length; i++) {
    input[i].onblur = function () {
        let label = this.parentElement.querySelector('.label');
        if (this.value !== "") {
            label.classList.add('floating')
        } else {
            label.classList.remove('floating')
        }
    }
}


$(document).ready(function () {
    // select2
    $('.select2').select2({
        minimumResultsForSearch: -1,
        placeholder: false,
    });

    $('.select2').on('select2:selecting', function (e) {
        let label = this.parentElement.querySelector('.label');
        label.classList.add('floating');
    });

    // date picker
    $('[data-toggle="datepicker"]').datepicker();
});
