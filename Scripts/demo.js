const block_1 = document.querySelector('.block--1');

window.addEventListener('load', () => document.body.style.filter = 'contrast(100%)');


//Defunct text animation
// block_1.addEventListener('mouseenter', () => {
//     setTimeout(() => {
//         const describe = document.createElement('div');
//         describe.classList.add('natours-desc');
//         document.body.appendChild(describe);

//         describe.animate([
//             {opacity: 0, transform: 'translateY(-30px)'},
//             {opacity: 1, transform: 'translateY(15px)'}
//         ], {
//             duration: 500,
//             easing: 'ease-in',
//             fill: 'forwards'
//         })
//     },25)
// })

// block_1.addEventListener('mouseleave', () => {
//     let describe = document.querySelector('.natours-desc')
//     describe.animate([
//         {opacity: 1, transform: 'translateY(15px)'},
//         {opacity: 0, transform: 'translateY(-30px)'}
//     ], {
//         duration: 500,
//         easing: 'ease-in',
//         fill: 'forwards'
//     })
//     setTimeout(() => describe.remove(),500)
// })
