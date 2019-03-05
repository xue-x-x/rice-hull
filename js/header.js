var pageId=getQueryString('pageId');
function getQueryString(name) {
    var result = decodeURIComponent(window.location.search).match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1) {
        return "";
    }
    return result[1];
}
var liNar=document.querySelectorAll('.list-ul li');
for(var i=0;i<liNar.length;i++){
    liNar[i].classList.remove('header-pitch-on');
}
if(!pageId){
    pageId=0;
}
liNar[pageId].classList.add('header-pitch-on');

