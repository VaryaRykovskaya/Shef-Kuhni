$(document).ready(() => {

    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $('#portfolios').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        arrows: true,
        fade: true,
        cssEase: 'linear'
    });
//-------------------------------------------
    $('.open-modal').click(() => {
        $('#reservation-container').css('display', 'block');
        $('#reserve')[0].reset();
    });

    $('#reservation-cancel-close, #reservation-container').click((e) => {
        if (e.target.id === 'reservation-container' || e.target.id === 'reservation-cancel-close') {
            $('#reservation-container').hide();
            // $('#name2').val("");
            // $('#phone2').val("");

        }
    });

    $('#burger').click(() => {
        $('#header-menu').toggleClass('menu-open');
    });

    $('#menu-cancel svg').click(() => {
        $('#header-menu').removeClass('menu-open');
    });

    $('.header-menu-item').click(() => {
        $('#header-menu').removeClass('menu-open');
    });




//----------------------------------------------------------
    $('#reserve-button').click(() => {
        let name2 = $('#name2');
        let phone2 = $('#phone2');

        let hasError2 = false;

        if (!name2.val()) {
            hasError2 = true;
            name2.css('border','1px solid red');
            $('#reserve-error-name2').show();
        } else{
            name2.css('border','1px solid rgb(126, 123, 121)');
            $('#reserve-error-name2').hide();
        }

        if (!phone2.val()) {
            hasError2 = true;
            phone2.css('border','1px solid red');
            $('#reserve-error-phone2').show();
        }else{
            phone2.css('border','1px solid rgb(126, 123, 121)');
            $('#reserve-error-phone2').hide();
        }


        if (!hasError2) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name2.val() + '&phone=' + phone2.val(),
                success: () => {
                    $('.reservation-sent').css('display', 'inline-block');
                    $('#reservation-form').hide();
                },
                error: () => {
                    $('.reservation-sent').css('display', 'inline-block');
                    $('#reservation-form').hide();
                    // $('#reservation-container').hide();
                    // alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона');
                },
            });
        }
    });


    $('#eight-block-form-button').click(() => {
        let name = $('#name');
        let phone = $('#phone');
        let dateTime = $('#date-time');

        let hasError = false;

        if (!name.val()) {
            hasError = true;
            name.css('border','1px solid red');
            $('#form-error-name').show();
        } else{
            name.css('border','1px solid rgb(126, 123, 121)');
            $('#form-error-name').hide();
        }

        if (!phone.val()) {
            hasError = true;
            phone.css('border','1px solid red');
            $('#form-error-phone').show();
        }else{
            phone.css('border','1px solid rgb(126, 123, 121)');
            $('#form-error-phone').hide();
        }

        if (!dateTime.val()) {
            hasError = true;
            dateTime.css('border','1px solid red');
            $('#form-error-dateTime').show();
        }else{
            dateTime.css('border','1px solid rgb(126, 123, 121)');
            $('#form-error-dateTime').hide();
        }

        if (!hasError) {
            $.ajax({
                type: 'post',
                url: 'mail2.php',
                data: 'name=' + name.val() + '&phone=' + phone.val()+ '&dateTime=' + dateTime.val(),
                success: () => {
                    $('#form-sent').css('display', 'block');
                    $('#form8').hide();
                },
                error: () => {
                    //alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона');
                    $('#form-sent').css('display', 'block');
                    $('#form8').hide();
                },
            });
        }
    });

});


//----old without optimisation------------------
// $('#reserve-button').click(() => {
//     let name2 = $('#name2');
//     let phone2 = $('#phone2');
//
//     if (name2.val() && phone2.val()) {
//         $.ajax({
//             type: 'post',
//             url: 'mail.php',
//             data: 'name=' + name2.val() + '&phone=' + phone2.val(),
//             success: () => {
//                 $('.reservation-sent').css('display', 'inline-block');
//                 $('#reservation-form').hide();
//             },
//             error: () => {
//                 $('.reservation-sent').css('display', 'inline-block');
//                 $('#reservation-form').hide();
//                 // $('#reservation-container').hide();
//                 // alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона');
//             },
//         });
//     } else {
//         if ((!(name2.val()))) {
//             name2.css('border','1px solid red');
//             $('#reserve-error-name2').show();
//         } else{
//             name2.css('border','1px solid rgb(126, 123, 121)');
//             $('#reserve-error-name2').hide();
//         }
//
//         if ((!(phone2.val()))) {
//             phone2.css('border','1px solid red');
//             $('#reserve-error-phone2').show();
//         }else{
//             phone2.css('border','1px solid rgb(126, 123, 121)');
//             $('#reserve-error-phone2').hide();
//         }
//     }
// });
//
//
// $('#eight-block-form-button').click(() => {
//     let name = $('#name');
//     let phone = $('#phone');
//     let dateTime = $('#date-time');
//
//     if (name.val() && phone.val() && dateTime.val()) {
//         $.ajax({
//             type: 'post',
//             url: 'mail2.php',
//             data: 'name=' + name.val() + '&phone=' + phone.val()+ '&dateTime=' + dateTime.val(),
//             success: () => {
//                 $('#form-sent').css('display', 'block');
//                 $('#form8').hide();
//             },
//             error: () => {
//                 //alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона');
//                 $('#form-sent').css('display', 'block');
//                 $('#form8').hide();
//             },
//         });
//     } else {
//         if ((!(name.val()))) {
//             name.css('border','1px solid red');
//             $('#form-error-name').show();
//         } else{
//             name.css('border','1px solid rgb(126, 123, 121)');
//             $('#form-error-name').hide();
//         }
//
//         if ((!(phone.val()))) {
//             phone.css('border','1px solid red');
//             $('#form-error-phone').show();
//         }else{
//             phone.css('border','1px solid rgb(126, 123, 121)');
//             $('#form-error-phone').hide();
//         }
//
//         if ((!(dateTime.val()))) {
//             dateTime.css('border','1px solid red');
//             $('#form-error-dateTime').show();
//         }else{
//             dateTime.css('border','1px solid rgb(126, 123, 121)');
//             $('#form-error-dateTime').hide();
//         }
//     }
// });
//