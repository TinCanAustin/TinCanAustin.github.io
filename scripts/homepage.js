function selectedChange(options, selection){
    options.forEach((option, index)=>{
        if(index == selection){
            option.querySelector("a").classList.add("selected");
        }else{
            option.querySelector("a").classList.remove("selected");
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