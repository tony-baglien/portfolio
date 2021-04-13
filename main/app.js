


const textContainer = document.getElementById('text');


const blobContainer = document.querySelector('.circle-container');
const circle = document.getElementById('base');


function blobAnimation (target,duration) {
anime({
    targets: target,
    rotate: '360deg',
    duration: duration,
    easing: 'linear',
    loop: true

})
}


const text = "Welcome to the Website of Tony Baglien"

let idx = 0;


typing(hideTyping)




 function typing(callback) {
     const intr = setInterval(() => {
        textContainer.innerHTML = text.slice(0,idx);
        idx++
        if (idx > text.length) {
            clearInterval(intr);
            callback();
        }
     },100)
}
function hideTyping() {
    textContainer.style.cursor = 'pointer'
    textContainer.addEventListener('click', () => {
        textContainer.classList.add('hide');
        setTimeout(blobRevealExpand,2000);
    })
}
function blobRevealExpand() {
    textContainer.remove();
    blobContainer.classList.add('reveal');

    blobContainer.style.height = '100vh';
    blobContainer.style.width = '100vw';

    const mc1 = document.getElementById('mc1');
    const mc2 = document.getElementById('mc2');
    const mc3 = document.getElementById('mc3');

    blobAnimation(mc1,6000);
    blobAnimation(mc2,5000);
    blobAnimation(mc3,4500);


    anime({
        targets: '.circle',
        scale: 5,
        duration: 3000,
        delay: 3000,
    })

    setTimeout(navMenu,6000);
}
function navMenu() {
    document.body.style.backgroundColor = 'black';
    document.body.style.filter = 'contrast(1)'
    blobContainer.remove();

    const nav = document.createElement('ul');
    nav.classList.add('reveal')
    nav.innerHTML = `
        <li>
            <a href="#">Demos</a>
        </li>
        <li>
            <a href="#">About</a>
        </li>
        <li>
            <a href="#" class="contact">Contact</a>
        </li>
    `
    document.body.appendChild(nav);

    anime({
        targets: nav,
        opacity: 1,
        duration: 7000
    })
}





