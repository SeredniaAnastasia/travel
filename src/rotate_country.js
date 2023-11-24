
function p(data) {
    console.log(data)
}
const COUNTRIES = [
    ['Africa', 'United States', 'Australia', 'Eorupe', 'Asia'],
    ['Germany','Francie','Chech','Spain','Italy'],
    ['Colorado','California','New York','Arizona','Alaska']
]

const elementCountries = document.querySelectorAll('.about__continent-text');
const element = document.getElementById('footer');

let counter = 0
setInterval(()=>{
    elementCountries.forEach((e, i)=>{
        e.innerText = COUNTRIES[counter][i]
    })
    counter++;
    if (counter > COUNTRIES.length-1) counter = 0
},2000)

// const ul = element.querySelector('#ul')
// console.log(ul)


const elementPoints = document.querySelectorAll('.about__continent-point');
const elementLine = document.querySelector('.about__continent-line');
p(elementLine)
function widthline() {
    if(elementPoints.length > 0){
        const firstElement = elementPoints[0].getBoundingClientRect()
        const lastElement = elementPoints[elementPoints.length -1].getBoundingClientRect()
        const widthLine = lastElement.x - firstElement.x
        elementLine && (elementLine.style.width = widthLine + 'px')
    }else{
        p('error')
    }
}
widthline()
window.onresize = function(event) {
    widthline()
};