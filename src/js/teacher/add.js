require('../common/aside.js');
require('../common/teacher.js');
$('#teacher-add-form').ajaxForm({
    success: function(data) {
        if (data.code == 200) {
            alert('添加讲师成功')
            location.href = '/itcast/dist/html/teacher/list.html'
        }
    }

})