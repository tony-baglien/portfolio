//opening text variables
const textContainer = document.getElementById('text');
const text = "Welcome to the Website of Tony Baglien"
let idx = 0;
//Blob variables
// const blobContainer = document.querySelector('.circle-container');
// const circle = document.getElementById('base');

// const mc1 = document.getElementById('mc1');
// const mc2 = document.getElementById('mc2');
// const mc3 = document.getElementById('mc3');

// blobAnimation(mc1,6000);
// blobAnimation(mc2,5000);
// blobAnimation(mc3,4500);

typing(hideTyping)

//Blob Animation
// function blobAnimation (target,duration) {
//     anime({
//         targets: target,
//         rotate: '360deg',
//         duration: duration,
//         easing: 'linear',
//         loop: true
    
//     })
//     }

//Opening animation AKA callback hell
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
        anime ({
            targets: textContainer,
            translateY: '1000px',
            opacity: 0,
            duration: 1000,
            easing: 'easeInOutQuad'
        })
        setTimeout(navMenu,2000);
    })
}
// function blobRevealExpand() {
//     textContainer.remove();
//     blobContainer.classList.add('reveal');
//     blobContainer.style.height = '100vh';
//     blobContainer.style.width = '100vw';

//     anime({
//         targets: circle,
//         blur: 0,
//         scale: 8,
//         duration: 2000,
//         delay: 3000,
//         update: (anim) => {
//             blobContainer.style.filter = 'blur('+ (10 - (10 * anim.progress / 90)) + 'px)'
//         }
//     })
//     setTimeout(navMenu,4000);
// }
function navMenu() {
    textContainer.style.opacity = 0;
    textContainer.remove();

    document.body.style.filter = 'contrast(100%)';

    const nav = document.createElement('ul');
    nav.classList.add('reveal')
    nav.innerHTML = `
        <li>
            <a href="html/demo.html">Demos</a>
        </li>
        <li>
            <a href="#">About</a>
        </li>
        <li>
            <a href="#" class="contact">Contact</a>
        </li>
    `

    anime({
        targets: nav,
        opacity: 1,
        duration: 5000
    })
    document.body.appendChild(nav);
};






