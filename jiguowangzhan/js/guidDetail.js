var like = document.getElementsByClassName('like')[0];
var share = document.getElementsByClassName('share')[0];
var bshare_custom = document.getElementsByClassName('bshare-custom')[0];
// console.log(like.children[0])
like.onclick=function(){
  if(like.children[0].className == 'like1'){
    like.children[0].className = 'like2';
  }else{
    like.children[0].className = 'like1';
  }
}
share.onclick=function(){
  if(share.children[0].className == 'share1'){
    share.children[0].className = 'share2';
    bshare_custom.style.display = 'block';
  }else{
    share.children[0].className = 'share1';
    bshare_custom.style.display = 'none';
  }
}