document.addEventListener("DOMContentLoaded", ()=>{
    const imagesContainer = document.getElementById("gameImages");
    const images = Array.from(imagesContainer.children);

    images.forEach(img => {
        const clone = img.cloneNode(true);
        imagesContainer.appendChild(clone);
    });
});