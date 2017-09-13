require('../common/aside.js');
require('../common/teacher.js');
var unit = require('../common/unit.js');
var cs_id = unit.getSearch('cs_id');
$.get('/v6/course/lesson', { cs_id: cs_id }, function(data) {
    if (data.code == 200) {
        data.result.editIndex = 3;
        $('#course-edit3').append(template('course-edit3-tpl', data.result));
    }

})