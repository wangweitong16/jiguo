var more = document.getElementsByClassName('more')[0];
more.style.display = 'none';
var loading = document.getElementsByClassName('loading')[0];

function theAjax(theUrl, who) {
  loading.style.display = 'block';

  var Ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
  Ajax.open('get', theUrl, true);
  Ajax.send();
  Ajax.onreadystatechange = function () {
    if (Ajax.readyState == 4) {
      if (Ajax.status == 200) {
        loading.style.display = 'none';
        more.style.display = 'block';
        var res = JSON.parse(Ajax.responseText);
        useres(res, who);
      } else {
        console.log(Ajax.status);
      }
    }
  }
}
theAjax('http://192.168.1.107:3000/data/guid.json', 'new');

function useres(res, who) {
  var thewho = who;

  if (thewho == 'new') {
    var html = template('art', {
      value: res.new
    })
  } else if (thewho == 'hot') {
    var html = template('art', {
      value: res.hot
    })
  }

  document.getElementsByClassName('main')[0].innerHTML = html;
  outhid();
}



var main = document.getElementsByClassName('main')[0];

function outhid() {
  var out = document.getElementsByClassName('guid_out');
  var m = 1;
  for (var i = 0; i < out.length; i++) {
    if (i >= m * 16) {
      out[i].style.display = 'none';
    }
  }
  m++;
  more.style.display = 'block';
  if (out.length < m * 16) {
    more.style.display = 'none';
  }
  more.onclick = function () {
    for (var i = 0; i < out.length; i++) {
      if (i < 16 * m) {
        out[i].style.display = 'block';
      } else {
        out[i].style.display = 'none';
      }
    }
    m++;
    if (out.length < m * 16) {
      more.style.display = 'none';
    }
  }

}


$('.title>div').on('click', $('div'), function (index) {
  $('.title>div').removeClass('c_color');
  $(this).addClass('c_color');
  if ($(this).index() == 0) {
    theAjax('http://192.168.1.107:3000/data/guid.json', 'new');
  } else if ($(this).index() == 1) {
    theAjax('http://192.168.1.107:3000/data/guid.json', 'hot');
  }
})