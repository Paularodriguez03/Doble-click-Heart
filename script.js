const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener('click', (e) => {
    if(clickTime == 0) {
        //si la varible es igual a 0 entonces a esa varible asiganale
        //la fecha con formato numerico
        clickTime = new Date().getTime()
        //Date()-
        //getTime()-devuelve el valor numérico correspondiente a la hora para la fecha especificada según la hora universal.
        console.log(clickTime);
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            //console.log(123);
            clickTime = 0
            //si el numero generado por data, gettime - el generado por el clicktime
            //es menor a 800 ejecuta la arrow function createHeart
            //y regresa me el clicktime a 0
        } else {
            clickTime = new Date().getTime()
            //si la resta anterior es mayor a 800 se le asigna otro
            //dato numerico a clickTime
        }
    }
})


const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 10000)

}

