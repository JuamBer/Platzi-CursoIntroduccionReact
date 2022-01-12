
function CheckListener(){
    const isHover = e => e.parentElement.querySelector(':hover') === e;

    const check = document.getElementById('Check');
    document.addEventListener('mousemove', function checkHover() {
        const hovered = isHover(check);
        if (hovered !== checkHover.hovered) {
            console.log("hola");
            console.log(hovered ? 'hovered' : 'not hovered');
            checkHover.hovered = hovered;
        }
    });
}

export { CheckListener };