document.addEventListener("DOMContentLoaded", ()=>{
    const loadingText = document.getElementsByClassName("centerLoading");
    let dots = 0; 
    let repetes = 0;

    setInterval(()=>{
        dots = (dots + 1) % 4;
        console.log(loadingText);
        loadingText[0].innerHTML = `<p>Loading${".".repeat(dots)}</p>`;

        repetes++;

        if(repetes == 5){
            window.location.href = "./home.html"
        }
    }, 500);
});