document.addEventListener("DOMContentLoaded", ()=>{
    const imagesContainer = document.getElementById("gameImages");
    const images = Array.from(imagesContainer.children);

    images.forEach(img => {
        const clone = img.cloneNode(true);
        imagesContainer.appendChild(clone);
    });

    const navigators = document.querySelectorAll(".contentFooter");
    navigators.forEach(button => {
        let a = button.querySelector("a");
        if(a.classList.contains("down")){
            a.addEventListener("click", ()=>{
                const section = button.parentElement;
                const next = section.nextElementSibling;

                if(next){
                    next.scrollIntoView({behavior: 'smooth'});
                }
            });
        }else if(a.classList.contains("up")){
            a.addEventListener("click", ()=>{
                const section = document.querySelector("#introContent");
                section.scrollIntoView({behavior: 'smooth'});
            });
        }
    });
});