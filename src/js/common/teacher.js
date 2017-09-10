$('#logout').on('click', function() {
    $.ajax({
        type: 'post',
        url: '/v6/logout',
        success: function(data) {
            if (data.code == 200) {
                location.href = '/itcast/dist/html/user/login.html'
            } else {
                alert('退出失败')
            }
        }
    })
})