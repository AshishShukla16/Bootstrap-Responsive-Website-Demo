$(function () {
    //setTimeout(function () {
    //    $('#testModel').modal('show');
    //}, 30000);
        
    $('[data-toggle="tooltip"]').tooltip({ trigger: "focus" });
    $('#btnRegister').tooltip({ title: "Click to Create new account", placement: "right", trigger: "hover focus" })

    $('#Name').on('focusout', function () {
        if ($(this).parent().hasClass('has-error')) {
            $(this).parent().removeClass('has-error');
        }
        if ($(this).parent().hasClass('has-success')) {
            $(this).parent().removeClass('has-success');
        }
        $('#Name').siblings('span').remove();
        $('#divError').text('');

        if (!IsNameValid($('#Name').val())) {
            $('#Name').parent().addClass("has-error has-feedback")
                .append('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');

            $('#divError').append('<div class="alert alert-danger alert-dismissible" role="alert">' +
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
            '<strong>Error!</strong>Name should be at-least 3 characters ' +
        '</div>');
        }
        else {
            $('#Name').parent().addClass("has-success has-feedback")
                .append('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
        }
    })
})


function IsNameValid(name) {
    debugger;
    var isValid = false;
    if (name.trim().length >= 3) {
        isValid = true;
    }
    return isValid;
}