require('../common/aside.js');
require('../common/teacher.js');
$.get('/v6/course', function(data) {
    if (data.code == 200) {
        $('#courses-list').html(template('course-list-tpl', data.result));
    }
})