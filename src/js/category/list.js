require('../common/aside.js');
require('../common/teacher.js');

$.get('/v6/category', function(data) {
    $('.table-bordered').append(template('category_list', data.result))
})