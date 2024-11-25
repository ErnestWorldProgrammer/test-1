



// 2

function fibonacci(n1 = 0, n2 = 1) {
    if (n1 > 144) return;
    console.log(n1);
    setTimeout(() => {
        fibonacci(n2, n1 + n2);
    }, 1000);
}
fibonacci();

// 4

const container = document.querySelector('div');
container.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        document.body.style.backgroundColor = event.target.textContent.toLowerCase();
    }
});


// 5

const button = document.getElementById('toggleButton');
const block = document.getElementById('myBlock');

button.addEventListener('click', function() {
    if (block.style.display === 'none') {
        block.style.display = 'block';
    } else {
        block.style.display = 'none';
    }
});


// 6

let btnPlus = document.querySelector(".btnPlus")
let plus = document.querySelector(".plus")

btnPlus.onclick = () => {
    let time = setInterval(() => {
        let plusNum = parseInt(plus.innerHTML)
        plusNum++
        plus.innerHTML = plusNum
        if (plusNum >= 100) {
            clearInterval(time);
        }
    }, 100)
}
