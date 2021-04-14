document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('form').onsubmit=()=>{
        let name = document.querySelector('#name').value;
        alert(`Hello,${name}`);
    };
});
