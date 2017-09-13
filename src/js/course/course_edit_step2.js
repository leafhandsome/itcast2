require('../common/aside.js');
require('../common/teacher.js');
var unit = require('../common/unit.js');
var cs_id = unit.getSearch('cs_id');
$.get('/v6/course/picture', { cs_id: cs_id }, function(data) {
    if (data.code == 200) {
        data.result.editIndex = 2;
        $('#edit2-course').append(template('course-edit2-tpl', data.result))
    }

})