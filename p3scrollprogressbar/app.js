var getprogressbar = document.querySelector('.progress-bar');
// console.log(getprogressbar);

window.onscroll = function(){

    var getscrollTop = document.documentElement.scrollTop;
    // console.log(getscrollTop);
    var getscrollHeight = document.documentElement.scrollHeight;
    // console.log(getscrollHeight);
    var getclientHeight = document.documentElement.clientHeight;
    // console.log(getclientHeight);

    var getlastHeight = getscrollTop*100 / (getscrollHeight - getclientHeight);

    getlastHeight = Math.floor(getlastHeight);
    // console.log(getlastHeight); 

    getprogressbar.style.width = `${getlastHeight}%`;

};

function btnprint(){
    window.print();
}