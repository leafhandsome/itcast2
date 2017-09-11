require('../common/aside.js');
require('../common/teacher.js');
var unit = require('../common/unit.js');
var cg_id = unit.getSearch('cg_id');
// console.log(111)
$.get('/v6/category/edit', { cg_id: cg_id }, function(data) {
        $('#category-add').html(template('category-form-tpl', data.result));
    })
    //提交保存
$('.form-horizontal').ajaxForm({
    delegation: true,
    success: function(data) {
        if (data.code == 200) {
            alert('恭喜你修改成功！')
            location.href = "/itcast/dist/html/category/list.html"
        }
    }


})