let red =document.getElementById('red');
let black =document.getElementById('black');
let sky =document.getElementById('sky');
let productImage =document.getElementsByTagName('img')[0];
let btnColor =document.querySelector('.buy-btn');

red.addEventListener('click', () => {
    productImage.setAttribute('src', 'product-image.webp');
    btnColor.style.backgroundColor = '#E6404D';
});

sky.addEventListener('click', () => {
    productImage.setAttribute('src', 'skyimg.webp');
    btnColor.style.backgroundColor = '#88C6FC';
});

black.addEventListener('click', () => {
    productImage.setAttribute('src', 'blackshoe.webp');
    btnColor.style.backgroundColor = 'black';
});