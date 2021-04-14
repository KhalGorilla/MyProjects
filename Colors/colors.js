document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('button').forEach(button=>{
        button.onclick=function(){
            document.querySelector('h1').style.color=button.dataset.color;
        }
    })
});




/*
document.addEventListener('DOMContentLoaded',()=>{
  
    document.querySelector('select').onchange=function(){
        document.querySelector('h1').style.color=this.value;
    };
});
*/