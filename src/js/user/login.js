$('#form-login').ajaxForm({
        success: function(data) {
            if (data.code == 200) {
                alert('登录成功');
                localStorage.setItem('str', JSON.stringify(data.result));
                location.href = '/itcast/dist'

            } else {
                alert('失败')
            }
        },
        error: function() {
            alert('失败')
        }
    })
    // $('#login-form').on('submit', function(e) {

//     $.ajax({
//         url: '/v6/login',
//         type: 'post',
//         data: $(this).serialize(),
//         success: function(data) {
//             if (data.code == 200) {
//                 alert('登陆成功');
//             } else {
//                 alert('登陆失败');
//             }
//         },
//         error: function() {
//             alert('登陆失败');
//         }
//     });

//     // jquery中阻止浏览器默认事件return false即可
//     return false;
// });