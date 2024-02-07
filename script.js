const input=document.getElementById("input-txt");
const listContainer = document.getElementById("list-container");

function addTask()
{
    if(input.value === '')
    {
        alert("write something");
    }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=input.value;
        listContainer.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value='';
    saveData();
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI')
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData()
{
    localStorage.setItem("data",listContainer.innerHTML);
}
function getData()
{
    listContainer.innerHTML=localStorage.getItem("data");
}
getData();



// let check=document.getElementsByClassName("checked");

// check.addEventListener('click',function(){
//     check.classList.toggle("checked");
// })