const caroulsel= document.querySelector("main");

let isDragStart = false, prevpagex, prevscrollleft;

const dragStart = (e) => {
    isDragStart = true
    prevpagex = e.pagex;
    prevscrollleft = caroulsel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventdefault();
    let position = e.pagex - prevpagex;
    caroulsel.scrollLeft = prevscrollleft - positiondiff;
}
const dragstop = () => {
    isDragStart= false;
}
caroulsel.addEventListener("mousedown", dragStart);
caroulsel.addEventListener("mousemove", dragStart);
caroulsel.addEventListener("mouseup", dragStart);