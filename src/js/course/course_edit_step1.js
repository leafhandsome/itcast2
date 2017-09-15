require('../common/loading.js');
require('../common/common.js');
require('../common/aside.js');
require('../common/teacher.js');
var unit = require('../common/unit.js');
var cs_id = unit.getSearch('cs_id');
console.log(cs_id);

$.get('/v6/course/basic', { cs_id: cs_id }, function(data) {
    if (data.code == 200) {
        data.result.editIndex = 1;
        $('#edit1-course').append(template('course-edit1-tpl', data.result));
    }
})