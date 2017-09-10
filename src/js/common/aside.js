var userStr = localStorage.getItem('str');
var user = JSON.parse(userStr);
$('.aside img').attr('src', user.tc_avatar);
$('.aside h4').html(user.tc_name);
$('.navs a').on('click', function() {
    console.log('123');

    $(this).next('ul').slideToggle();
});
var path = location.pathname;
$('.navs a').removeClass('active');
$('.navs a[href="' + path + '"]').addClass('active').parents('ul').show();