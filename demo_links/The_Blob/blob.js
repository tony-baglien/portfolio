const blobContainer = document.querySelector('.circle-container');
const circle = document.getElementById('base');

const mc1 = document.getElementById('mc1');
const mc2 = document.getElementById('mc2');
const mc3 = document.getElementById('mc3');

const orbitContainer1 = document.querySelector('.orbit-container-1')
const orbitContainer2 = document.querySelector('.orbit-container-2')
const orbitContainer3 = document.querySelector('.orbit-container-3')
const orbit = document.querySelectorAll('#orbit');

orbitAnimation(orbitContainer1,4000);
orbitAnimation(orbitContainer2,6000,'reverse');
orbitAnimation(orbitContainer3,7500,'forward');

blobAnimation(mc1,6000);
blobAnimation(mc2,5000);
blobAnimation(mc3,4500);

orbit.forEach(e => e.style.transition= 'transform 5s ease-in-out')
setInterval(function () {
    orbit.forEach(elem => {
        elem.style.transform = `scale(${Math.random() + .5})`;
    })
},10000)

function blobAnimation (target,duration) {
    anime({
        targets: target,
        rotate: '360deg',
        duration: duration,
        easing: 'linear',
        loop: true
    
    })
}

function orbitAnimation (target,duration, direction = 'forwards') {
    anime({
        targets: target,
        rotate: '360deg',
        duration: duration,
        direction: direction,
        easing: 'linear',
        loop: true
    
    })
}




