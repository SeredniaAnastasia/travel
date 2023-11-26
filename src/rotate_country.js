
const elementPoints = document.querySelectorAll('.about__continent-point');
const elementLine = document.querySelector('.about__continent-line');
function widthline() {
    if (elementPoints.length > 0) {
        const firstElement = elementPoints[0].getBoundingClientRect();
        const lastElement = elementPoints[elementPoints.length - 1].getBoundingClientRect();
        const widthLine = lastElement.x - firstElement.x;
        elementLine && (elementLine.style.width = widthLine + 'px');
    } else {
        console.log('error')
    }
}

widthline()
window.onresize = function (event) {
    widthline()
};
