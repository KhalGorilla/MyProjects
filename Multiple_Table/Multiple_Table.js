document.addEventListener('DOMContentLoaded',function(){

    document.querySelector('button').onclick=function(){
        for(let i=1;i<=12;i++)
        {
            for(let j=1;j<=12;j++){
                document.write(i*j+" ");
               
            }
         document.write("<br>");
        }
    }

})