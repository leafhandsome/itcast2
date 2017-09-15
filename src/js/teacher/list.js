require('../common/loading.js');
require('../common/common.js');
require('../common/aside.js');
require('../common/teacher.js');
// var userObj = JSON.parse(localStorage.getItem('str')) || {};
// var tc_avatar = userObj.tc_avatar || '/public/img/default.png';
// console.log(tc_avatar);


// 请求数据渲染模板，插入指定位置
$.get('/v6/teacher', function(data) {
    data.code == 200 && $('#teacher-list-table').append(template('teacher-list-tpl', data.result));
});

// 查看功能
$(document).on('click', '#view_btn', function() {
        var data = {
            tc_id: $(this).attr('data-id'),
        }
        console.log(data.tc_id);
        // $('.avatar img').attr('src', tc_avatar);
        $.get('/v6/teacher/view', data, function(data) {
            data.code == 200 && $('.view_teacher').html(template('teacher-view', data.result))
        })
        $()
    })
    //开启注销
$(document).on('click', '.btn-status', function() {
    var $this = $(this);

    var data = {
        tc_id: $(this).attr('data-id'),
        tc_status: $(this).attr('data-status')
    }
    console.log(data.tc_id);

    $.post('/v6/teacher/handle', data, function(data) {
        var newStatus = data.result.tc_status;
        console.log(newStatus);

        $this.text = newStatus == 0 ? '注销' : '启用';
        $this.attr('data-status', newStatus);
        location.href = '/itcast/dist/html/teacher/list.html'
    })
})