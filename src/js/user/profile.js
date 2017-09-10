require('../common/aside.js');
require('../common/teacher.js');

$.ajax({
    type: 'get',
    url: '/v6/teacher/profile',
    success: function(data) {
        if (data.code == 200) {
            var html = template('profile_tmp', data.result);
            $('.teacher-profile').html(html);
        }
    }
})