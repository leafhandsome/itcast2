require('../common/loading.js');
require('../common/common.js');
require('../common/aside.js');
require('../common/teacher.js');

$('#course-add').ajaxForm(function(data) {
    if (data.code == 200) {
        alert('创建成功')
        location.href = "/itcast/dist/html/course/course_edit_step1.html?cs_id=" + data.result.cs_id;
    }
})