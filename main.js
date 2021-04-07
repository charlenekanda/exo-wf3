window.onload = function() {
    setInterval(randomBackground, 15000);

    let burgerIcon = document.querySelector('#burger');
    burgerIcon.onclick = function (){
        if (this.classList.contains('show')) {
            this.classList.remove("text-secondary");
            this.classList.remove("burger-active");
            this.classList.add('text-white');
        } else {
            this.classList.add('burger-active');
            this.classList.add('text-secondary');
            this.classList.remove("text-white");
        }
    }

};

function randomBackground() {
    let head = document.querySelector('.head');

    let images = [
        'images/background-1.jpeg',
        'images/background-2.jpeg',
        'images/background.jpg',
    ];

    head.style.backgroundImage = "url(" + images[Math.floor(Math.random() * images.length)] + ")";
}