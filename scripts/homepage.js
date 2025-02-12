function selectedChange(options, selection){
    options.forEach((option, index)=>{
        let a = option.querySelector("a");
        let select = option.querySelector(".select");

        if(index == selection){
            a.classList.add("selected");
            if (!select) {
                select = document.createElement("span");
                select.classList.add("select");
                select.textContent = "> ";
                option.prepend(select);
            }
        }else{
            a.classList.remove("selected");
            if(select){
                select.remove();
            }
        }
    });
}

function pageOpen(page){
    console.log(page);
    switch(page){
        case "About me":
            window.location.href = "./about-me.html";
            break;
        case "Projects":
            window.location.href = "./projects.html";
            break;
        case "Skills":
            window.location.href = "./skills.html";
            break;
        case "My Profiles":
            window.location.href = "./profiles.html";
            break;
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    const options = document.querySelectorAll("li");
    let selected = 0;

    selectedChange(options, selected);

    //Keyboard Interupts 
    document.addEventListener("keydown", (e)=>{
        if(e.key == "ArrowRight" || e.key == "d"){
            selected = (selected + 1) % options.length;
            selectedChange(options, selected);
        }else if(e.key == "ArrowLeft" || e.key == "a"){
            selected = (selected - 1) % options.length;
            if(selected < 0){
                selected *= -1;
            }
            selectedChange(options, selected);
        }else if(e.key == "Enter"){
            pageOpen(options[selected].querySelector("a").innerHTML);
        }
    });

    //Mouse Interupts
    options.forEach((option, index)=>{
        option.addEventListener("mouseenter", ()=>{
            selected = index;
            selectedChange(options, selected);
        });
    });
});