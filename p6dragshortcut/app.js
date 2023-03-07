//Get Ui
const getbox = document.querySelector('.box');
const getdragbtn = document.querySelector('.dragbtn');
const getbtns = document.querySelector('.btns');


getbox.addEventListener('click',function(){
    getbtns.classList.add('active');
});

getbox.addEventListener('dblclick',function(){
    getbtns.classList.remove('active');
});

drag(getbox);

function drag(ele){
    var getcx,getcy,setcx,setcy;
    
    ele.onmousedown = mousedown;


    function mousedown(e){
        getcx = e.clientX;
        getcy = e.clientY;
        console.log('step1',getcx,getcy);

        document.onmousemove = mousemove;
        document.onmouseup = mousestop;

    }

    function mousemove(e){
        setcx = getcx - e.clientX;
        setcy = getcy - e.clientY;
        console.log('step2',setcx,setcy);

        getcx = e.clientX;
        getcy = e.clientY;
        console.log('step3',getcx,getcy);
        
        const btnleftp = ele.offsetLeft;
        const btntopp = ele.offsetTop;
        console.log('step4',btnleftp,btntopp);

        ele.style.left = btnleftp - setcx+'px';
        ele.style.top = btntopp - setcy+'px';



    }

    function mousestop(){
        document.onmousemove = null;
        document.onmouseup =null
    }
}