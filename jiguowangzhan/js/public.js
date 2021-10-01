var toTop = document.getElementsByClassName('toTop')[0];
toTop.onclick = function(){
    var timer = setInterval(() => {
        document.documentElement.scrollTop-=20;
        if(document.documentElement.scrollTop<=0){
            clearInterval(timer);
        }
    }, 1);
}