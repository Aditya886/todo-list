const nameInput = document.getElementById("nameInput");
const inputButton = document.getElementById("inputbutton");
const add = document.getElementById("add");
const reset = document.getElementById("reset");
const elete = document.getElementById("delete");

let names = [];
nameInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter')
    {
        event.preventDefault();

        inputButton.click();
    }
})
nameInput.addEventListener('keydown', function(event){
    if(nameInput.value ===''){
      
        if(event.key === 'Backspace')
         {
             event.preventDefault();

             elete.click();
         }
    }
})

nameInput.addEventListener('keydown', function(event){
    if(nameInput.value ===''){
      
        if(event.key === 'Escape')
         {
             event.preventDefault();

             reset.click();
         }
    }
})
inputButton.addEventListener('click',() => {
    const name = nameInput.value.trim();
    if(name !== ''){
        names.push(name);
        added();
        nameInput.value= '';
    }
})

reset.addEventListener('click',() => {
    names= [];
    added();
})

elete.addEventListener('click', () =>{
    if(names !==''){
    names.pop();
    added();
    }
})
function added()
{
    add.innerHTML = '';
    names.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    add.appendChild(li);
  });
}