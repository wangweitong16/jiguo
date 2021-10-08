var lbt = document.getElementsByClassName('lbt')[0];
var timer = null;
var timer1 = null;
var index = 0;


// 轮播图左右按钮
var prev_ = document.getElementById('prev');
var next_ = document.getElementById('next');
// console.log(prev_);
prev_.onclick = function () {
    index--;
    if (index < 1) {
        index = 0;
    }
    clearInterval(timer);
    clearInterval(timer1);
    move();
    // console.log(index);
}
next_.onclick = function () {
    index++;
    if (index >= 4) {
        index = 1;
    }
    clearInterval(timer);
    clearInterval(timer1);
    move();
    // console.log(index);
}

function move() {
    var step = 0;
    var maxstep = 30;
    var start = lbt.scrollLeft;
    var end = 1000 * index;
    var w = (end - start) / maxstep;

    timer1 = setInterval(function () {
        step++;
        if (step >= maxstep) {
            step = 0;
            clearInterval(timer1);
        }
        start += w;
        lbt.scrollLeft = start;
    }, 30)
}

function automove() {
    timer = setInterval(function () {
        index++;
        if (index >= 4) {
            index = 1;
            lbt.scrollLeft = 0;
        }
        move();
    }, 3000)

}
automove();

lbt.addEventListener('mouseenter', function () {
    clearInterval(timer);
    clearInterval(timer1);
})
lbt.addEventListener('mouseleave', function () {
    automove();
})


// document.addEventListener('visibilitychange', function () {
//     if (document.visibilityState == 'hidden') {
//         clearInterval(timer);
//     }

//     if (document.visibilityState == 'visible') {
//         timer();
//     }
// })


var Christmas = document.getElementById('sd_time');
var timer_ = setInterval(function () {
    var shengdan = new Date("2021-12-25 0:00:00");
    var nowtime = new Date();
    var sy = shengdan.getTime() - nowtime.getTime();
    var d = Math.floor(sy / 1000 / 60 / 60 / 24);
    var h = Math.floor(sy / 1000 / 60 / 60 % 24);
    var m = Math.floor(sy / 1000 / 60 % 60);
    var s = Math.floor(sy / 1000 % 60);
    var shengyu = d + "天" + h + "时" + m + "分" + s + "秒";
    Christmas.innerHTML = shengyu;
}, 1000)