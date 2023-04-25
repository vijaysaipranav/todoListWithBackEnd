console.log('my script is running')
// fetching the Dom elements 
const cb = document.querySelectorAll('input[type="checkbox"]');





    
cb.forEach((cb)=>{
    cb.addEventListener('click', async (event) => {
        console.log(cb.checked);
        if (cb.checked===true) {
            
            const Id = cb.value;
            console.log(Id);
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "/add-checkbox", true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({
                 id : Id,
                 
                
            }));
        }else{
          
            const Id=cb.value;
            console.log(Id);
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "/remove-checkbox", true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({
                    id : Id,
            }));
        }
        }); 
});



