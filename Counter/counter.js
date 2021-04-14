if(!localStorage.getItem('counter')){
    localStorage.setItem('counter',0);
}
function count(){
    let counter=localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML=counter;
    localStorage.setItem('counter',counter);
    if(counter%100===0){
    alert(`count is now ${counter}`);
    }
}
document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('h1').innerHTML=localStorage.getItem('counter');
    document.querySelector('button').onclick = count;
    //setInterval(count,1000);
    
})