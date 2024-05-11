const buttonCreate=document.querySelector(".notes");
const small=document.querySelector(".container");
let notesContainer=document.querySelector('.notesContainer');

buttonCreate.addEventListener("click",createNotes);
notesContainer.addEventListener('click',deleteNotes);

function createNotes(){
    let box=document.createElement('p');
    let div=document.createElement('div');
    let button= document.createElement('button');
    box.className= "input-box";
    box.setAttribute("contenteditable", "true");
    div.classList.add("smallContainer2");
    button.classList.add('delete');
    div.appendChild(box);
    div.appendChild(button);
    notesContainer.appendChild(div);
    small.appendChild(notesContainer);
}

function deleteNotes(e){
    if(e.target.className==="delete"){
        e.target.parentElement.classList.add("deleteAnim");
        setTimeout(()=>{
            e.target.parentElement.remove();
        },800);
    }
}