let input=document.querySelector("#input")
let btn=document.querySelector("#btn")
let list=document.querySelector("#list")

btn.addEventListener("click",()=>{
   let li= document.createElement("li");
   list.appendChild(li);
   let inputData=input.value;
   li.innerHTML=`${inputData} <button class="delete-btn">Delete</button> <button class="complete-btn">Completed</button>`


   li.querySelector(".delete-btn").addEventListener("click",()=>{
    li.remove();
   })

   li.querySelector(".complete-btn").addEventListener("click",()=>{
    li.style.textDecoration="line-through";
   })
});