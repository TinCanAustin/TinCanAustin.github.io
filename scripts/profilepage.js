document.addEventListener("DOMContentLoaded", ()=>{
    const prev = document.getElementById("prv");
    const next = document.getElementById("next");
    const images = document.querySelectorAll("#images img");
    const a = document.querySelector("#link a");

    let postion = 0;

    function changeDisplay(){
        images.forEach((img, index) => {
            img.classList.toggle("active", index == postion );
        });
        switch(postion){
            case 0:
                a.textContent = "https://github.com/TinCanAustin";
                a.setAttribute('href', "https://github.com/TinCanAustin");
                break;
            case 1:
                a.textContent = "https://www.youtube.com/@TinCan420";
                a.setAttribute('href', "https://www.youtube.com/@TinCan420");
                break;
            case 2:
                a.textContent = "https://tincanaustin.itch.io/";
                a.setAttribute('href', "https://tincanaustin.itch.io/");
                break;
            case 3:
                a.textContent = "https://www.linkedin.com/in/austin-philip-1a0493324/";
                a.setAttribute('href', "https://www.linkedin.com/in/austin-philip-1a0493324/");
                break;
        }
    }

    changeDisplay()

    next.addEventListener("click", ()=>{
        postion = (postion + 1) % images.length;
        changeDisplay();
    });
    prev.addEventListener("click", ()=>{
        postion = (postion - 1 + images.length) % images.length;
        changeDisplay();
    });
});