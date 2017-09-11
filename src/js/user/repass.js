require('../common/aside.js');
require('../common/teacher.js');
$('#repass-form').on('submit', function() {
    if ($("#input-pass-repeat").val() !== $("#new_pass").val()) {
        alert('两次输入密码不一致')
    }
    $('#repass-form').ajaxSubmit({
        cuccess: function(data) {
            console.log(data);

        }
    })
    return false;
})