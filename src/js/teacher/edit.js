require('../common/aside.js');
require('../common/teacher.js');
//切割
var update = require('../common/unit.js');
var tc_id = update.getSearch('tc_id')
    //回显
$.get('/v6/teacher/edit', { tc_id: tc_id }, function(data) {
        $('#edit-form').html(template('teacher-edit-tpl', data.result))
    })
    //修改
$('#teacher-edit-form').ajaxForm({
    delegation: true,
    success: function(data) {
        if (data.code == 200) {
            alert('修改成功');
            location.href = "/itcast/dist/html/teacher/list.html"
        }
    }
})