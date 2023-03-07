//1
const languages = ['Nodejs','Reactjs','Vuejs','Laravel'];
const colors = ['red','skyblue','violet','yellow'];
const gettxtani = document.querySelector('.txtani');
// console.log(gettxtani);

//2
// Generator Function

function* generator(){
    var index = 0;

    while(true){
        if(index > 3){
            index = 0;
        }
        yield index++;
    }
}
const genfun = generator();
// console.log(genfun.next());
// console.log(genfun.next().value); //0
// console.log(languages[genfun.next().value]);


showword(languages[genfun.next().value]);

function showword(word){
    // console.log(word);//Nodejs
    // console.log(word[0]);//N
    // console.log(word.length); //6

    gettxtani.textContent = '';
    gettxtani.classList.add(colors[languages.indexOf(word)]);

    let count = 0;

    let showinterval = setInterval(function(){
        if( count < word.length){
            gettxtani.textContent += word[count];
            count++;
        }else{
            clearInterval(showinterval);
            deleteword(word);
        }
    },300);

}

function deleteword(word){
    let txtlastindex = word.length-1;
    // console.log(txtlastindex); //5
    let deleteinterval = setInterval(function(){
        if(txtlastindex >= 0){
            // console.log(txtlastindex);
            gettxtani.textContent = gettxtani.textContent.substring(0,gettxtani.textContent.length-1);
            txtlastindex--;
        }else{
            gettxtani.classList.remove(colors[languages.indexOf(word)]);

            clearInterval(deleteinterval);
            showword(languages[genfun.next().value]);



        }
    },400);
}

let gettextlights = document.querySelectorAll('.text-light');
// console.log(gettextlights);

gettextlights.forEach(function(gettextlight){
    // console.log(gettextlight);
    // console.log(gettextlight.textContent);

    
    let arrtextlights = gettextlight.textContent.split('');
    gettextlight.textContent = '';
    // console.log(arrtextlights);
    arrtextlights.forEach(function(arrtextlight,idx){
        // console.log(arrtextlight);

        let newem = document.createElement('em');
        newem.textContent = arrtextlight;
        newem.style.animationDelay = `${idx*.05}s`;

        gettextlight.append(newem);
    })

});

