require('../common/aside.js');
require('../common/teacher.js');

// 模板
$.get('/v6/category/top', function(data) {
    $('#select').html(template('category_add', data.result));
});

// 表单保存
$('.form-horizontal').ajaxForm(
    function(data) {
        if (data.code == 200) {
            alert('恭喜你成功啦！')
        }

    })