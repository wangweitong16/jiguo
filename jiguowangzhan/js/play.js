var more = document.getElementsByClassName('more')[0];
more.style.display='none';
var Ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
Ajax.open('get', 'http://192.168.1.107:3000/data/play_new.json', true);
Ajax.send();
var loading = document.getElementsByClassName('loading')[0];
Ajax.onreadystatechange = function () {
    if (Ajax.readyState == 4) {
        if (Ajax.status == 200) {
            loading.style.display='none';
            more.style.display='block';
            var res = JSON.parse(Ajax.responseText);
            useres(res);
        } else {
            console.log(Ajax.status);
        }
    }
}

function useres(res) {
    var html = template('art', {
        value: res
    })
    document.getElementsByClassName('main')[0].innerHTML = html;
    outhid();
}



var main = document.getElementsByClassName('main')[0];
function outhid(){
    var out = document.getElementsByClassName('out');
    for(var i = 0;i<out.length;i++){
        if(i>=16){
            out[i].style.display = 'none';
        }
    }
    more.onclick = function (){
        if(more.value==1){
            more.value = 0;
            for(var i = 0;i<out.length;i++){
                if(i>=16){
                    out[i].style.display = 'none';
                }
            }
        }else{
            more.value = 1;
            more.style.display='none';
            
        }
    }
    
}

