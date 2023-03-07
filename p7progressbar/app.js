//Get Ui
const getbtn = document.getElementById('btn');
const getprogressbar = document.querySelector('.progress-bar');
const sethref = 'https://github.com/';

getbtn.addEventListener('click',function(){

    getbtn.setAttribute('disabled',true);
    var idx = 0;

    var setint = setInterval(increseprogress,100);

    function increseprogress(){
        if(idx >= 100){
            clearInterval(setint);
            idx = 0;

            window.location.href = sethref;
        }else{
            idx++;
            getprogressbar.style.width = `${idx}%`;
            getprogressbar.setAttribute('data-in',`${idx}%`);
        }      
    }   


});