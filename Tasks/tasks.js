document.addEventListener('DOMContentLoaded',function(){


//By default, submit button is disabled
document.querySelector('#submitbtn').disabled=true;
document.querySelector('#task').onkeyup=()=>{
    if(document.querySelector('#task').value.length>0){
    document.querySelector('#submitbtn').disabled=false;
}else{
    document.querySelector('#submitbtn').disabled=true;
}
}



document.querySelector('form').onsubmit=function(){
    const task=document.querySelector('#task').value;
    const li=document.createElement('li');
    li.innerHTML=task;
    document.querySelector('#tasks').append(li);
    document.querySelector('#task').value='';
    document.querySelector('#submitbtn').disabled=true;
    //Stop form from submitting
    return false;
};
});