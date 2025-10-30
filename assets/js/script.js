// trang-tong-quan sider
let buttonmenu=document.querySelector(".header .inner-logo .menu")
if(buttonmenu){    
    let sider=document.querySelector(".body .sider");
    buttonmenu.addEventListener("click",()=>{
        sider.classList.toggle("active");
    })
    let overlay=document.querySelector(".body .sider .overlay");
    overlay.addEventListener("click",()=>{
        sider.classList.remove("active");
    })
}

//Tao tour them xoa lich trinh
let addbutton=document.querySelector(".section-8 .add-schedule");
if(addbutton){
    addbutton.addEventListener("click",()=>{
        let parent=document.querySelector(".section-8 .inner-list-main");
        let child=parent.querySelector(".inner-schedule-item");
        let cloneitem=child.cloneNode(true);
        cloneitem.querySelector("input").value="";
        cloneitem.querySelector("textarea").value="";
        parent.appendChild(cloneitem);
    })
}
    
let list=document.querySelector(".section-8 .inner-list");
if(list){
        
    list.addEventListener("click",(event)=>{
        //nut xoa
        if(event.target.closest(".rubbish-remove")){
            let child=event.target.closest(".inner-schedule-item");          
            let parent=document.querySelectorAll(".section-8 .inner-list-main .inner-schedule-item");  
            if(parent.length>1)child.remove();

        }
        //nut mo rong    
        if(event.target.closest(".button-hidden")){
            let parent=event.target.closest(".inner-schedule-item");
            parent.classList.toggle("hiden");
        }
    })
}
