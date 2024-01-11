//constants
let window=document.querySelector('#window');
const one=document.querySelector('#1');


//functions
const numberPress=function(){
    document.querySelector('#window').textContent=`${document.querySelector('#window').textContent}+'1'`
    console.log('press');
}

//event listeners
one.addEventListener('click',numberPress)






