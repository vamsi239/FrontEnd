let input=document.querySelector("#input");

function InputFun(ele){
    let inputValue=ele.target.value;
    console.log(inputValue);

    if(inputValue==="red"){
        document.body.style.background="red";
    }
}
input.addEventListener("input",InputFun);