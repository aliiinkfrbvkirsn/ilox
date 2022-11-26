// let Addbtn = document.querySelector('.boxAdd__button') 
// let taskInput = document.querySelector('.boxAdd__input') 
// let boxTasks = document.querySelector('.boxCards') 
 
// let arrTask = []; 
 
// function updateLocal() { 
//     localStorage.setItem('Tasks', JSON.stringify(arrTask)) 
// } 
 
// Addbtn.addEventListener('click', () => { 
//     arrTask.push({ 
//         Text:taskInput.value, 
//         check:false, 
//     }); 
     
//     updateLocal() 
//     display() 
//     taskInput.value=''; 
// }) 
 
// function display() { 
//     arrTask.forEach((item, index) => { 
//         boxTasks.innerHTML += `<div class="boxCards__card ${item.check ? 'boxCards__card-completed': ''}" 
//             <p class="boxCards__description">${item.text}</p> 
//             <div> 
//                 <input type="checkbox"/> 
//                 <button class="boxCards__button">Delete</button> 
//             </div> 
//         </div>` 
//     }) 
// }


let Addbtn = document.querySelector('.boxAdd__button'); 
let taskInput = document.querySelector('.boxAdd__input'); 
let boxTasks = document.querySelector('.boxCards'); 
 
let  arrTasks = []; ''

if (localStorage.getItem('Tasks') != undefined) {
    arrTasks = JSON.parse(localStorage.getItem('Tasks'));
    display();    
}
 
function updateLocal(){ 
    localStorage.setItem('Tasks',JSON.stringify(arrTasks)) 
} 
function updateLocal() {
    
}

 
Addbtn.addEventListener('click',() => { 
    arrTasks.push({ 
        text:taskInput.value, 
        check:false, 
    }); 
   updateLocal(); 
   display(); 
 
   taskInput.value = ''; 
   }); 
 
function display(){ 
    boxTasks.innerHTML = '' 
    arrTasks.forEach((item,index) => { 
 
       boxTasks.innerHTML += `<div class="boxCards__card ${item.check ? "boxCards__card-completed": ''}" >
              <p class="boxCards__description">${item.text}</p> 
              <div> 
                  <input type="checkbox" onclick="Checktask(${index})" ${item.check ? "checked" : ''} class="boxCards__checkbox">  
                  <button onclick="remove(${index})" class="boxCards__button">Delete</button> 
              </div> 
         </div>   
       `  
    }); 
}
function Checktask(index) {
    arrTasks[index].check =!arrTasks[index].check
    display()
    updateLocal()
}

function remove(index) {
    arrTasks.splice(index,1);   
    display();
    updateLocal();
}