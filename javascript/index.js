const textE1=document.getElementById("textarea")
const totalcounterE1=document.getElementById("total-counter")
const remainingcounterE1=document.getElementById("remaining-counter")
textE1.addEventListener("keyup", ()=>{
    updateCounter()
});
updateCounter()
function updateCounter()
{
      totalcounterE1.innerText=textE1.value.length
      remainingcounterE1.innerText=textE1.getAttribute("maxLength")-textE1.value.length
}