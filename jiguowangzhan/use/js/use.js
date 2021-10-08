var xj_nav = document.getElementById('xj_nav');
// console.log(xj_nav);
var xj_lis = xj_nav.getElementsByTagName('li');
// console.log(xj_lis);

var sy_all_list = document.getElementById('sy_all_list');
var sy_sqz_list = document.getElementById('sy_sqz_list');
var sy_syz_list = document.getElementById('sy_syz_list');
var sy_yjs_list = document.getElementById('sy_yjs_list');
var jiazai_donghua = document.getElementById('jiazai_donghua');

function hide_() {
    jiazai_donghua.style.display = 'block';
    sy_all_list.style.display = 'none';
    sy_sqz_list.style.display = 'none';
    sy_syz_list.style.display = 'none';
    sy_yjs_list.style.display = 'none';
    click_more.style.display = 'none';
}

xj_lis[0].onclick = function () {
    hide_();
    xj_lis[0].className = 'active_';
    xj_lis[1].className = '';
    xj_lis[2].className = '';
    xj_lis[3].className = '';
    setTimeout(function () {
        jiazai_donghua.style.display = 'none';
        sy_all_list.style.display = 'block';
        click_more.style.display = 'block';
    }, 500)
}
xj_lis[1].onclick = function () {
    hide_();
    xj_lis[0].className = '';
    xj_lis[1].className = 'active_';
    xj_lis[2].className = '';
    xj_lis[3].className = '';
    setTimeout(function () {
        jiazai_donghua.style.display = 'none';
        sy_sqz_list.style.display = 'block';
        click_more.style.display = 'block';
    }, 500);
}
xj_lis[2].onclick = function () {
    hide_();
    xj_lis[0].className = '';
    xj_lis[1].className = '';
    xj_lis[2].className = 'active_';
    xj_lis[3].className = '';
    setTimeout(function () {
        jiazai_donghua.style.display = 'none';
        sy_syz_list.style.display = 'block';
        click_more.style.display = 'block';
    }, 500);
}
xj_lis[3].onclick = function () {
    hide_();
    xj_lis[0].className = '';
    xj_lis[1].className = '';
    xj_lis[2].className = '';
    xj_lis[3].className = 'active_';
    setTimeout(function () {
        jiazai_donghua.style.display = 'none';
        sy_yjs_list.style.display = 'block';
        click_more.style.display = 'block';
    }, 500);
}