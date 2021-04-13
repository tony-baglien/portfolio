


// const textContainer = document.getElementById('text');
const mc1 = document.getElementById('mc1')


// const text = "Welcome to the Website of Tony Baglien"

let idx = 0;
let done = false;


// typing(imsosorry)

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

function imsosorry() {
    textContainer.style.cursor = 'pointer'
    textContainer.addEventListener('click', () => {
        textContainer.classList.add('hide');
    })
}


