console.log("script runnning...");
document.querySelector('.cross').style.display = 'none';
document.querySelector('.humberger').addEventListener("click", ()=>{
 document.querySelector('.sidebarGo').classList.toggle('.sidebarGo');
 if(document.querySelector('.sidebarGo').classList.contains('.sidebarGo')){
    document.querySelector('.ham').style.display = 'inline'
    document.querySelector('.cross').style.display = 'none'
 }
 else{
    document.querySelector('.ham').style.display = 'none'
    document.querySelector('.cross').style.display = 'inline'
 }

})