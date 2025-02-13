document.addEventListener("DOMContentLoaded", ()=>{
    const prev = document.getElementById("prv");
    const next = document.getElementById("next");
    const images = document.querySelectorAll("#images img");

    let postion = 0;

    function changeDisplay(){
        images.forEach((img, index) => {
            img.classList.toggle("active", index == postion );
        });
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