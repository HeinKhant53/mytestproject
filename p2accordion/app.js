var getacctitle = document.getElementsByClassName('acctitle');
// console.log(getacctitle);
var getacccontent = document.querySelectorAll('.acccontent');
// console.log(getacccontent);

var geticon = document.querySelectorAll('i');
console.log(geticon);

for(let i=0; i < getacctitle.length; i++){
    // console.log(getacctitle);

    getacctitle[i].addEventListener('click',function(e){
        // console.log(this);
        // console.log(e.target);

        this.classList.toggle('active');
        
        if(getacccontent[i].style.height){
            getacccontent[i].style.height = null;

            geticon[i].classList.replace('fa-hand-point-left','fa-hand-point-right')
        }else{
            getacccontent[i].style.height = getacccontent[i].scrollHeight+'px';

            geticon[i].classList.replace('fa-hand-point-right','fa-hand-point-left')
        }
       
       
    });

    if(getacctitle[i].classList.contains('active')){
        getacccontent[i].style.height = getacccontent[i].scrollHeight+'px';
        geticon[i].classList.replace('fa-hand-point-right','fa-hand-point-left')

    }

    
}