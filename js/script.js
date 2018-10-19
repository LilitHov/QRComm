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

    // Tooltip
    var toolTitle = document.querySelectorAll('.tool-title');
    var toolLength = toolTitle.length;
    for (let i = 0; i < toolLength; i++) {
        let titleWidth = toolTitle[i].offsetWidth;
        let tooltipWidth = toolTitle[i].parentElement.offsetWidth;
        let toolText = toolTitle[i].parentElement.nextElementSibling;
        if (tooltipWidth < titleWidth) {
            toolTitle[i].onmouseover = function () {
                toolText.classList.add('show');
            };

            toolTitle[i].onmouseout = function () {
                toolText.classList.remove('show');
            };
        }
    }

    // date picker
    $('[data-toggle="datepicker"]').datepicker({});

    // floating label
    var date = document.querySelectorAll('.form-input');
    var dateLength = date.length;

    for (var i = 0; i < dateLength; i++) {
        // onfocus
        date[i].onfocus = function () {
            addFloating(this);
        };
        // onchange
        date[i].onchange = function () {
            if (this.value !== '') {
                addFloating(this);
            } else {
                removeFloating(this);
            }
        };
        // onblur
        date[i].onblur = function () {
            if (!this.classList.contains('date')) {
                if (this.value !== '') {
                    addFloating(this);
                } else {
                    removeFloating(this);
                }
            }
        };
    }
    // onhide
    $('[data-toggle="datepicker"]').on('hide.datepicker', function (e) {
        if (this.value === "") {
            removeFloating(this);
        }
    });
    // add floating class
    function addFloating(e) {
        let label = e.parentElement.querySelector('.label');
        label.classList.add('floating');
    }

    //remove floating class
    function removeFloating(e) {
        let label = e.parentElement.querySelector('.label');
        label.classList.remove('floating');
    }

    // hamburger
    var leftAside = document.querySelectorAll('.left-sidebar')[0];
    var body = document.getElementsByTagName('body')[0];
    var close = document.querySelectorAll('.close')[0];
    var hamburger = document.querySelectorAll('.hamburger')[0];

    hamburger.onclick = function () {
        hamburger.classList.add('hide');
        body.classList.add('layer');
        leftAside.classList.add('show');
        close.classList.add('show');
    };


    close.onclick = function () {
        hamburger.classList.remove('hide');
        body.classList.remove('layer');
        leftAside.classList.remove('show');
        close.classList.remove('show');
    }



});

