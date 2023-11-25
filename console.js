const stage = document.querySelector('.stage')
const lamp = document.querySelector('.lamp')
const show2 = document.querySelector('.show2')
const animal = document.querySelector('#animals')
const light = document.querySelector('.light')
const stagemagic = document.querySelector('.stagemagician')

stage.addEventListener('click', () => {
    stage.classList.remove('stagehover')
    stage.classList.add('transitionShow')
    setTimeout(800)
    stage.style.visibility = 'gone'
})

lamp.addEventListener('click', () => {
    if (show2.style.visibility =='hidden'){
        show2.style.visibility = 'visible'
        light.style.visibility = 'visible'
    }
    else{
        show2.style.visibility = 'hidden'
        light.style.visibility = 'hidden'
    }
})

stagemagic.addEventListener('click', () =>{
    animal.style.top = '220px'
    if (animal.classList.contains('rabbit')){
        setTimeout(() => {
            animal.classList.remove('rabbit')
            animal.classList.add('bird')
        }, 300);
    }
    else{
        setTimeout(() => {
            animal.classList.remove('bird')
            animal.classList.add('rabbit')
        }, 300);
    }
    setTimeout(() => {
        animal.style.top = '0px'
    }, 300);
})